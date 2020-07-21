// import React, {useState} from 'react';
// import MessageManager from "../../modules/MessagesManager";
// import "./MessageForm.css"

// const MessageForm = props => {
//     const[message, setMessage] = useState({message: ""});
//     const[isLoading, setIsLoading] = useState(false);

//     const handleFieldChange = evt => {
//         const stateToChange = {...message};
//         stateToChange[evt.target.id] = evt.target.value;
//         setMessage(stateToChange);
        
//     };
//     const constructNewMessage = evt => {
//         evt.preventDefault();
//         if(message.message === "") {
//            window.alert("Please fill out input field");
//     } else {
//         setIsLoading(true);

//         MessageManager.post(message)
        
//         .then(() => props.history.push("/messages"));
//     }
// };
// return (
//     <>
//         <form>
//             <fieldset>
//                 <div className="formgrid">
//                     < input
//                      type="text"
//                      name="message"
//                      required
//                      onChange={handleFieldChange}
//                      id="message"
//                      placeholder="Message"
//                      />
//                      <label htmlFor="message">Message</label>
                
//                     </div>
//                     <div className="alignRight">
//                         <button 
//                         type="button"
//                         disabled={isLoading}
//                         onClick={constructNewMessage}
//                         >Submit</button>
//                 </div>
//             </fieldset>
//         </form>
//     </>
// )
// }

// export default MessageForm