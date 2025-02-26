import React from 'react'
import "./Login.css"
import { loginUrl } from '../Apis/spotify'

function Login() {
  return (
    <>
        <div className='login'>
        {/* spotify logo */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
        {/* login page */}
        

            <div className="wrapper">
                <div className="container">
                    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login