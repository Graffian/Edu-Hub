import "./Login.css"
import {useState} from "react"
import {useNavigate , Routes , Route} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import Student from "../Student/Student"
function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const random = uuidv4()
    function studentLogin(){
        navigate("/Student")
    }
    function teacherLogin(){
        navigate(`/Teacher`)
    }
    return(
        <>
            <nav className="Login-nav">
                <div className="Credentials-div">
                    <p className="Login-text">Login</p>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} className="username-input" placeholder="enter Username" type="text"/>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className="password-input" placeholder="enter Password" type="password"/>
                </div>
                <div className="Login-as-div">
                    <button onClick={studentLogin} className="student-login-Btn">Login as Student</button>
                    <button onClick={teacherLogin} className="teacher-login-Btn">Login as Teacher</button>
                </div>
            </nav>
        </>
    )
}
export default Login