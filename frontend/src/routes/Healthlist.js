import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./style/list.css"
import logo from "../picture/logo/아름들기2.png"
import health1 from "../picture/health/health1.jpeg"
import health2 from "../picture/health/health2.jpeg"
import health3 from "../picture/health/health3.jpeg"
import health4 from "../picture/health/health4.jpeg"
import border from "../picture/logo/border.png";


const Healthlist = (props)=>{
   
    let navigate = useNavigate();
    const onHome=()=>{
        navigate("/")
    }
    const onLogin=()=>{
        navigate("/login")
    }
    const onSignup=()=>{
        navigate("/signup")
    }
    const onDetail=()=>{
        navigate("/detail")
    }


    return(
        <div className="container">
            <div className="list_header">
                <img src={logo} onClick={onHome} height="50"/>
                <nav>
                  <ul>
                    <li><button className="a" onClick={onLogin}>
                            {props.isLogin?"로그아웃":"로그인"}</button></li>
                    <li><button className="a" onClick={onSignup}>회원가입</button></li>
                    
                  </ul>
                </nav>
            </div>
            
            <div className="left">

            </div>
            <div className="list_middle">
                <div className="classlist">
                 <div className="one">
                        <img className="overfit" src={health1}/>
                        <img src={border} onClick={onDetail} className="border" width="95%" height="95%"></img>
                        <span className="text1">쉽게 따라하는 요가</span>
                    </div>
                    <div className="two">
                        <img className="overfit" src={health2}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">관절에 무리가 가지 않는 운동</span>
                    </div>
                    <div className="three">
                        <img className="overfit" src={health3}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">아픈 허리를 쫙~펴주는 스트레칭</span>
                    </div>
                    <div className="four">
                        <img className="overfit" src={health4}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">하루 20분 운동으로 체력 기르기</span>
                    </div>
                </div>
            </div>
            <div className="right">
    
            </div>
        </div>
    )
}

export default Healthlist;
