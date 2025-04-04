import "./Login.css"

function Login(){

    return(
        <>
            <nav className="Login-nav">
                <div className="Credentials-div">
                    <p className="Login-text">Login</p>
                    <input className="username-input" placeholder="enter Username" type="text"/>
                    <input className="password-input" placeholder="enter Password" type="password"/>
                </div>
                <div className="Login-as-div">
                    <button className="student-login-Btn">Login as Student</button>
                    <button className="teacher-login-Btn">Login as Teacher</button>
                </div>
            </nav>
        </>
    )
}
export default Login