// import React, { useState } from "react"
// // Author Team
// const Login = props => {
//     const [credentials, setCredentials] = useState({ email: "", username: "", password: "" })

//     // Updating login information when the user enters their credentials
//     const handleFieldChange = (evt) => {
//         const stateToChange = { ...credentials }
//         // Watching for the state to change in the field
//         stateToChange[evt.target.id] = evt.target.value
//         setCredentials(stateToChange)
//     }

//     const handleLogin = (e) => {
//         e.preventDefault(); 

//         props.setUser(credentials)
//         props.history.push("/");
//     }

//     return (
//         <form onSubmit={handleLogin}>
//           <fieldset>
//             <h3>Please sign in</h3>
//             <div className="formgrid">
//               <input onChange={handleFieldChange} type="email"
//                 id="email"
//                 placeholder="Email address"
//                 required="" autoFocus="" />
//               <label htmlFor="inputEmail">Email address</label>
    
//               <input onChange={handleFieldChange} type="password"
//                 id="password"
//                 placeholder="Password"
//                 required="" />
//               <label htmlFor="inputPassword">Password</label>
//             </div>
//             <button type="submit">Sign in</button>
//           </fieldset>
//         </form>
//       );

   
// };

// export default Login;
