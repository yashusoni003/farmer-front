import React, { useState } from 'react';

import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

const Login = () => {
	// Inputs
	const [mynumber, setnumber] = useState("");
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');
	const signin = () => {
	const auth = getAuth();
let verify = new RecaptchaVerifier('recaptcha-container', {}, auth);
signInWithPhoneNumber(auth, mynumber, verify)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      setfinal(confirmationResult);
      // ...
    }).catch((error) => {
		alert(error);
      // Error; SMS not sent
      // ...
    });


}


const ValidateOtp = () => {
const code = otp;
final.confirm(code).then((result) => {
  // User signed in successfully.
//   const user = result.user;
console.log("sucess",result);
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});

}

// 	// Sent OTP
// 	const signin = () => {

// 		if (mynumber === "" || mynumber.length < 10) return;

// 		//let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
// const auth = getAuth();
		
//       let verify = new RecaptchaVerifier('recaptcha-container', {}, auth);

// 		signInWithPhoneNumber(mynumber, verify).then((result) => {
// 			setfinal(result);
// 			alert("code sent")
// 			setshow(true);
// 		})
// 			.catch((err) => {
// 				alert(err);
// 				window.location.reload()
// 			});
// 	}

// 	// Validate OTP
// 	const ValidateOtp = () => {
// 		if (otp === null || final === null)
// 			return;
// 		final.confirm(otp).then((result) => {
// 			// success
// 		}).catch((err) => {
// 			alert("Wrong code");
// 		})
// 	}

	return (
		<div style={{ "marginTop": "200px" }}>
			<center>
				<div style={{ display: !show ? "block" : "none" }}>
					<input value={mynumber} onChange={(e) => {
					setnumber(e.target.value) }}
						placeholder="phone number" />
					<br /><br />
					<div id="recaptcha-container"></div>
					<button onClick={signin}>Send OTP</button>
				</div>
				<div style={{ display: show ? "block" : "none" }}>
					<input type="text" placeholder={"Enter your OTP"}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br />
					<button onClick={ValidateOtp}>Verify</button>
				</div>
			</center>
		</div>
	);
}

export default Login;
