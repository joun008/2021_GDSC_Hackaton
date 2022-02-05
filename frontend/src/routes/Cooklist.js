import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./style/list.css"
import logo from "../picture/logo/아름들기2.png"
import cook1 from "../picture/cook/cook1.jpeg"
import cook2 from "../picture/cook/cook2.jpeg"
import cook3 from "../picture/cook/cook3.jpeg"
import cook4 from "../picture/cook/cook4.jpeg"
import border from "../picture/logo/border.png";


const Cooklist = (props)=>{
   
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
                        <img className="overfit" src={cook4}/>
                        <img src={border} onClick={onDetail} className="border" width="95%" height="95%"></img>
                        <span className="text1">손주가 좋아하는 빵 만들기</span>
                    </div>
                    <div className="two">
                        <img className="overfit" src={cook2}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">맛있게 차 우리는 방법</span>
                    </div>
                    <div className="three">
                        <img className="overfit" src={cook3}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">어디에 넣어도 맛있는 만능 간장</span>
                    </div>
                    <div className="four">
                        <img className="overfit" src={cook1}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">다양한 돼지고기 요리법</span>
                    </div>
                </div>
            </div>
            <div className="right">
    
            </div>
        </div>
    )
}

export default Cooklist;
