import React from 'react'
import './Login.css'
function Login() {
  return (
    <div>
      <div className="container container_login">
        <h1>Sign In</h1>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username"/><br/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"/><br/><br/>
            <input type="submit" value="Sign In"/>
        </form>
    </div>
    </div>
  )
}

export default Login
