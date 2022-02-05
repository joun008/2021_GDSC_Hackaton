import React from 'react';
import { useNavigate } from "react-router-dom";
import "./style/Login.css"
import logo from "../picture/logo/아름들기2.png";
const Login=({isLogin,setIsLogin})=>{
    let navigate = useNavigate();
    const onHome=()=>{
        setIsLogin(true);
        navigate("/")
    }
    const onSignup=()=>{
        navigate("/signup")
    }
    return (
    <div>
        <div className="login_logo">
            <img src={logo} onClick={onHome}height="200"/>
        </div>

        <div className="login">
            <div className="login-text">
                <h1>LOGIN</h1>
            </div>
                <div className="input-box">
                    <input id="username" type="text" name="username" placeholder="아이디"/>
                    <label for="username">아이디</label>
                </div>
                <div className="input-box"> 
                    <input id="password" type="password" name="password" placeholder="비밀번호"/>
                    <label for="password">비밀번호</label>
                </div>
                <br/>
            <input type="submit" value="로그인" onClick={onHome} className= "btn_Sign"></input>
            
            <div className='msg'>
                아직 회원이 아니신가요?     
            </div>
            <div className="login_to_signup" onClick={onSignup}>
                회원가입
            </div>
        </div>
    </div>
    
    )
}

export default Login;