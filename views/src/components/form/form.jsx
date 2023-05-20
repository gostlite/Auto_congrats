import React from "react";

export default function Input(props) {
    return <div>
        <label for={props.name}>{props.name }</label>
        <input type={props.name === "password" ? "password" : "text"} placeholder={props.name === "password" ? "Password" : "Email"} id={ props.name} />
    </div>
   
}

// export function Form() {
//     <form >
//         <h3>Login Here</h3>

//         <label for="username">Username</label>
//         <input type="text" placeholder="Email or Phone" id="username"/>

//         <label for="password">Password</label>
//         <input type="password" placeholder="Password" id="password"/>

//             <button>Log In</button>
//             {/* <Button fontColor="primary"/> */}
//         <div class="social">
//           <div class="go"><i class="fab fa-google"></i>  Google</div>
//           <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
//         </div>
//     </form>
// }