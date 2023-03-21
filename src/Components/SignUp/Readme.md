#  **Al Demo1 Sign-Up page with face-recognition using React JS** 
## _These are the follows steps taken :-_
---
- Start with importing React, React-Webcam and also imported axios for saving data in the server. 

* Created a function called Signup and inside there created a return method and within that made a HTML form using JSX and right below the form, have created an html div element and within that it's using javascript to check whether the camera is connected and then inside that have all the JSX code for Webcam component and a button for launching the camera, capturing the image and then using another html image elements to display the captured image along with a button for retaking the captured image. 

* Starting with using React.UseState for form's text-field to working, also used usestate for all three camera button and include the string in the JSX form button, in order to work when uses click  and used React.UseRef for calling the webcam.

* Afterwards, created a function that generates an ID and then below it made another function that detects for Different First Name typed in the form and then generate unique ID for that person.

* Created Three functions that using React.Usecallback method to for capturing Selfie and then save it in useState. After that created another three functions that checkes for the camera connection and then launch camera.

* Lastly Created a function that saves the data to the server and also to the Local Storage and Using the useState and add adding that to the JSX form. It Opens the camera onCLick and then display it the captured picture below it. 
---
