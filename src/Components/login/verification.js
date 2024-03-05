import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./verification.css";

const Verification = () => {
    const [frontImg, setFrontImg] = useState(null);
    const [isWebcamOn, setIsWebcamOn] = useState(false);
    const videoRef = useRef(null);

    const CapFront = useCallback(() => {
        const pic = videoRef.current.getScreenshot();
        setFrontImg(pic);
    }, [videoRef, setFrontImg]);

    const launchCameraFront = async () => {
        try {
            await navigator.mediaDevices.getUserMedia({ video: true });
            setIsWebcamOn(true);
            CapFront();
        } catch (error) {
            console.log('Error getting camera permission: ', error);
        }
    };
    const verifyFace = async (imageData, userId) => {
        try {
            const response = await axios.post('https://ser.backend.alter-learning.com:4000/verify', {
                base64_image: imageData,
                user_id: userId,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data; 
        } catch (error) {
            console.error('Error verifying face:', error);
            throw new Error('Error verifying face. Please try again.');
        }
    };
    
    
    const handleVerifyFace = async () => {
        try {
            // Convert the image to base64
            const base64Image = frontImg.split(',')[1]; // Assuming frontImg is a data URL
    
            // Send the base64 image to the server
            const verificationResult = await verifyFace(base64Image);
    
            if (verificationResult && verificationResult.response && verificationResult.response[0] === 'string') {
                console.log("202 verified successfully");
                toast.success("Identity verified successfully!");
            } else {
                toast.error("Failed to verify identity. Please try again.");
            }
        } catch (error) {
            console.error('Error in handleVerifyFace:', error.message, error.response);
            toast.error("Error verifying face. Please try again.");
        }
      
    };
    

    return (
        <div className="face_recog">
            <div className="contents">
                {isWebcamOn && (
                    <>
                        <Webcam
                            audio={false}
                            width={420}
                            height={320}
                            className="video"
                            mirrored={true}
                            screenshotFormat="image/png"
                            ref={videoRef}
                            videoConstraints={{ 'facingMode': 'user' }}
                        />
                        <button onClick={CapFront} className="face_front"><FontAwesomeIcon icon={faCameraRetro} /></button>
                        <button className="hidden" onClick={() => setIsWebcamOn(false)}><FontAwesomeIcon icon={faCircleXmark} /></button>
                    </>
                )}
                {!isWebcamOn && (
                    <button onClick={launchCameraFront} className="launch_frontCam">Launch Front Camera</button>
                )}
                {frontImg && (
                    <>
                        <img className="screenshot" src={frontImg} alt="screenshot" />
                        <button className="redo" onClick={() => setFrontImg(null)}>Retake</button>
                    </>
                )}

                <button className="btn-hover color-1" onClick={handleVerifyFace}>
                    Verify Identity
                </button>              
                   <button className="btn-hover1 color-2">
                    <Link to="/SignUp"> Register New User </Link>
                </button>
            </div>
        </div>
    )
};
export default Verification;