#  **Al Demo1 Login and Verification page with face-recognition using React JS** 

## _These are the follows steps taken for login Page :-_
--- 
- Start with importing React, React-router-dom and React-toastify for notifications.
* Created a function called Login and within that function using React.useState for the form text-field to working and used useNavigate for navigating to another page. 
* Below that created a function called handlelogin and within that function there's an email string and a password string and using js selectors to get the element's ID and their value and a Let for checking whether the login is succesfull or not. And Using for loops from Javascript to check for the email and password from the local storage and an If statement to check if the login is success or not and using toast from react-toastify to received notifications of either Login is successfull or invaid email or password. If login is succes then it would navigate to the verification page. 
* Inside the Return Method that renders all the html form with a submit button and using OnClick method to call the handleLogin function that procces the form data and check for login to be succesfull and then navigate to verification page. 

---
## _These are the follows steps taken for Verification Page :-_
---
- Start with importing React, React-Webcam, React-router-dom,axios, React-toastify, FontAwesome and Css stylesheet.
* Created a function called Verification and within that function there's two React.useState's and a videoRef for the camera component. 
* Creared a function called CapFront which uses React.useCallback method to capture the Image and send it to the React.useState.Below that create another function called LaunchCameraFront which tries to check for the camera connection. 
* In the return Method which renders all the html Components that displays the camera components along with a button to capture the image and using html image element to display the captured image and with a button to retake the captured image.Afterwards, there's a button that verify the captured image from the database using axios to make call to the api and check if that image matches with the image in the database and takes the user to the dashboard using a react-router-dom navigation.Other button takes user to the registration page using react-router-dom Link. 
---
