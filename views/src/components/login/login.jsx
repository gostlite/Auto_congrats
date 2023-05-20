import React from "react";
import "./login.css"
import Input from "../form/form";
// import {Button} from "@mui/icons-material"

export default function Login(){
    return <div>

    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form >
        <h3>Login Here</h3>

        <Input name="username"/>
        <Input name="password"/>

            <button>Log In</button>
            {/* <Button fontColor="primary"/> */}
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>

    </div>  
}