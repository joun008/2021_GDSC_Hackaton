import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../picture/logo/아름들기2.png";
import "./style/signup.css"
const Signup =({}) => {
    let navigate = useNavigate();
    const onHome=()=>{
        navigate("/")
    }
    const onLogin=()=>{
        navigate("/login")
    }
    return(
        <div>
            <div className="logo">
                <img src={logo} height="160"/>
            </div>
            <div className="signup">
                <div className="title">계정 이름</div>
                    <input type="text" name="id" class="text"/>
                    <br/>
                <div className="title">계정 비밀번호</div>
                    <input type="password" name="pwd" class="text"/>
                    <br/>
                <div className="title">비밀번호 확인</div>
                <input type="password" name="pwdcheck" class="text"/><br/>
                <div className="title">이름</div>
                <input type="text" name="name" class="text"/><br/>
                <div className="title">휴대전화</div>
                <input type="text" name="phonenum" class="text"/><br/><br/>
                <input type="submit" value="회원가입" class="btn" onClick={onLogin}/>
            </div>
        </div>
    )
}

export default Signup;