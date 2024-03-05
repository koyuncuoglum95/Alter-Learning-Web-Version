import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./signup.css";



const Signup = () => {
	// Get the Data from the form
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [username, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [Id, setId] = useState("");

	// data for face Detect 
	const [leftPic, setLeftPic] = useState(null);
	const [rightPic, setRightPic] = useState(null);
	const [frontPic, setFrontPic] = useState(null);



	// checking for camera connectivity 

	const [isCameraConnected, setIsCameraConnected] = useState(false);
	const [isCameraOn, setIsCameraOn] = useState(false);
	const [isCameraWorking, setIsCameraWorking] = useState(false);
	const webcamRef = useRef(null);

	// video recording data 
	const [recording, setRecording] = useState(false);
	const [cameraAvailable, setcameraAvailable] = useState(false);
	const videoRef = useRef(null);
	const mediaRecorderRef = useRef(null);
	const [captureVideo, setCaptureVideo] = useState(null);


	const [isPicturesSaved, setIsPicturesSaved] = useState(false);

    const [postData, setPostData] = useState([]);



	// Generate a New ID 
	const generateId = () => {
		const randomId = Math.floor(Math.random() * 1000);
		setId(randomId);
	};
	// Detect for Different first name and generate Random Id for each Person
	const handleNameChange = (event) => {
		setFname(event.target.value);
		generateId();
	};

	// left Faceing camera elements 

	const captureLeft = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setLeftPic(imageSrc);
	}, [webcamRef, setLeftPic]);

	const launchLeftCamera = async () => {
		try {
			await navigator.mediaDevices.getUserMedia({ video: true });
			setIsCameraConnected(true);
			captureLeft();

		} catch (error) {
			console.log('Error getting camera permission: ', error);
		}
	};

	// right facing camera elements
	const captureRight = useCallback(() => {
		const img = webcamRef.current.getScreenshot();
		setRightPic(img);
	}, [webcamRef, setRightPic]);

	const launchRightCamera = async () => {
		try {

			await navigator.mediaDevices.getUserMedia({ video: true });
			setIsCameraOn(true);
			captureRight();

		} catch (error) {
			console.log('Error getting camera permission: ', error);
		}
	}
	// front facing camera elements 
	const captureFront = useCallback(() => {
		const pic = webcamRef.current.getScreenshot();
		setFrontPic(pic);
	}, [webcamRef, setFrontPic]);

	const launchFrontCamera = async () => {
		try {
			await navigator.mediaDevices.getUserMedia({ video: true });
			setIsCameraWorking(true);
			captureFront();

		} catch (error) {
			console.log('Error getting camera permission: ', error);
		}
	};




	// save data locally and to the server 
	const saveData = (event) => {
		event.preventDefault();
		const data = {
			id: Id,
			firstName: fname,
			leftSelfie: leftPic,
			rightSelfie: rightPic,
			frontSelfie: frontPic,
		};
		const dataLocal = {
			firstName: fname,
			lastName: lname,
			userName: username,
			email: email,
			password: password,
		};
		const key = Date.now().toString();
		// Save data locally and on server 
		try {
			localStorage.setItem(key, JSON.stringify(dataLocal));
			toast.success("data saved locally");
		} catch {
			console.log("Error");
			alert("Error Saving Data");
		}
		axios.post('https://ser.backend.alter-learning.com:4000/register', {
			base64_image_left: leftPic,
			base64_image_right: rightPic,
			base64_image_front: frontPic,
			user_id: Id,
		})
			.then((response) => {
				// Handle the server response
				console.log(response.data);

				if (response.status === 200) {
					console.log("saved success");
					toast.success("Data saved successfully on the server");
					
					// Update the state to indicate that pictures are saved
					setIsPicturesSaved(true);
					// Refresh the page
					window.location.reload();
				} else {
					console.error("Invalid server response format");
					toast.error("Error saving data on the server");
				}
			})
			.catch((error) => {
				console.error("Error saving data on the server", error);
				toast.error("Error saving data on the server");
			});

	};



	const launchCamera = () => {
		navigator.mediaDevices
			.getUserMedia({ video: true })
			.then(() => setcameraAvailable(true))
			.catch(() => setcameraAvailable(false));
	}
	const closeVideo = () => {
		URL.revokeObjectURL(captureVideo);
		setCaptureVideo(null);
	};



	





	return (
		<div className="main">
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<div className="container">
				<div className="title"> Register </div>
				<div className="sub-title">Please enter your details below.</div>
				<form  >
					<div className="user-details">
						<div className="input-box">
							<label htmlFor="First Name" className="details">First Name</label>
							<input type="text" name="FirstName" id="FirstName" placeholder="Enter Your Name" value={fname} onChange={handleNameChange} required />
						</div>
						<div className="input-box">
							<label htmlFor="Last Name" className="details">Last Name</label>
							<input type="text" name="LastName" id="LastName" placeholder="Enter Your Last Name" value={lname} onChange={(e) => setLname(e.target.value)} required />
						</div>
						<div className="input-box">
							<label htmlFor="Username" className="details">Username</label>
							<input type="text" name="Username" id="Username" placeholder="Enter Your Username" value={username} onChange={(e) => setUser(e.target.value)} required />
						</div>
						<div className="input-box">
							<label htmlFor="Email" className="details">Email</label>
							<input type="text" name="Email" id="Email" placeholder="Enter Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
						</div>
						<div className="input-box">
							<label htmlFor="Password" className="details">Password</label>
							<input type="text" name="password" id="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
						</div>
					</div>
				</form>
				<div className="face_detect">


					{isCameraConnected && (
						<>
							<Webcam
								audio={false}
								width={420}
								mirrored={true}
								height={320}
								screenshotFormat="image/png"
								ref={webcamRef}
								videoConstraints={{ 'facingMode': 'user' }}
							/>
							<button onClick={captureLeft} className="left_face"><FontAwesomeIcon icon={faCameraRetro} /></button>
							<button className="hide" onClick={() => setIsCameraConnected(false)}><FontAwesomeIcon icon={faCircleXmark} /></button>


						</>
					)}
					{!isCameraConnected && (
						<button onClick={launchLeftCamera} className="launch_left">Launch Left Camera</button>
					)}
					{leftPic && (
						<>
							<img className="result" src={leftPic} alt="screenshot" />
							<button className="retake" onClick={() => setLeftPic(null)}>Retake</button>
						</>
					)}

					{isCameraWorking && (
						<>
							<Webcam
								audio={false}
								width={400}
								height={320}
								mirrored={true}
								screenshotFormat="image/png"
								ref={webcamRef}
								videoConstraints={{ 'facingMode': 'user' }}

							/>
							<button onClick={captureFront} className="front_face"><FontAwesomeIcon icon={faCameraRetro} /> </button>
							<button className="hide" onClick={() => setIsCameraWorking(false)}> <FontAwesomeIcon icon={faCircleXmark} /> </button>



						</>
					)}
					{!isCameraWorking && (
						<button onClick={launchFrontCamera} className="launch_front"> Launch Front Camera</button>
					)}
					{frontPic && (
						<>
							<img id="result" src={frontPic} alt="screenshot" />
							<button id="recap" onClick={() => setFrontPic(null)}>Retake</button>

						</>
					)}


					{isCameraOn && (
						<>
							<Webcam
								audio={false}
								width={420}
								height={320}
								mirrored={true}
								screenshotFormat="image/png"
								ref={webcamRef}
								videoConstraints={{ 'facingMode': 'user' }}
							/>
							<button onClick={captureRight} className="right_face"><FontAwesomeIcon icon={faCameraRetro} /></button>
							<button className="hide" onClick={() => setIsCameraOn(false)}><FontAwesomeIcon icon={faCircleXmark} /></button>


						</>
					)}
					{!isCameraOn && (
						<button onClick={launchRightCamera} className="launch_right">Launch Right Camera</button>
					)}
					{rightPic && (
						<>
							<img className="finals" src={rightPic} alt="screenshot" />
							<button className="recapture" onClick={() => setRightPic(null)}>Retake</button>
						</>
					)}

					
						



				</div>
				{fname && lname && username && email && password && leftPic && rightPic && frontPic && (
					<><button
						type="submit"
						className="button"
						onClick={(event) => {
							// Proceed to save data
							saveData(event);
						}}
					>
						Register
					</button><ToastContainer />
					</>
				)}

			</div>

			<div>
				{postData}
			</div>
		</div>
	);
};
export default Signup;