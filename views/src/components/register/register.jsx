import React from "react";
import Input from "../form/form";
import "../login/login.css"


export default function Register() {
      return <div>

    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form >
        <h3>Register Here</h3>

        <Input name="First Name"/>
        <Input name="username"/>
        <Input name="Email"/>
        <Input name="password"/>

            <button>Register</button>
            {/* <Button fontColor="primary"/> */}
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>

    </div>  
}
