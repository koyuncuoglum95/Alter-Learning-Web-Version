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
    }

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

                 <button className="btn-hover color-1">Verify Identity</button>
                 <button className="btn-hover1 color-2">
                 <Link to="/SignUp"> Register New User </Link>
                 </button>
            </div>
        </div>
    )
};
export default Verification;