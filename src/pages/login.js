import React from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


function Login() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    let history = useHistory();

    function onSubmit(){

        axios.get("/authenticate", { 
          params: {
            username : username,
            password : password,
          }})
          .then((res) => {
            console.log(res.data);
            if(res.data == "True")
            {
                history.push('/');
            }
            else if(res.data == "False")
            {
              alert("Wrong Username/Password");
            }
            else
            {
              alert("EXCEPTION: " + res.data);
            }
        })
        
    }

    return (

        <div className='login w-full h-screen bg-gray flex items-center'>
            <div className='login-container w-3/5 flex flex-row rounded-md mx-auto'>
                <div className='w-1/2 flex px-16 items-center bg-white rounded-tl-md rounded-bl-md'>
                    <div className='flex flex-col w-4/5'>
                        <h1 className='text-4xl font-poppins font-semibold'>Login</h1>
                        <p className='text-gray'>Sign in to your account</p>
                        <form class="ui form">
                            <div class="field">
                                <input type="text" name="username" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                            </div>
                            <div class="field">
                                <input type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                        </form>
                        <button className='w-1/3 bg-blue py-2 text-white rounded-md mt-3 login-btn focus:outline-none'
                            onClick={onSubmit}>Login
                        </button>
                    </div>
                </div>
                <div className='w-1/2 bg-blue flex justify-center items-center rounded-tr-md rounded-br-md'>
                    <img src="logo/glean-logo-lg.png" alt="Glean logo" />
                </div>

            </div>
        </div>

    );
  }
  
export default Login;