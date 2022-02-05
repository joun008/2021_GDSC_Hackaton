import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./style/list.css"
import logo from "../picture/logo/아름들기2.png"
import wel1 from "../picture/language/wel1.jpeg"
import wel2 from "../picture/language/wel2.jpeg"
import wel3 from "../picture/language/wel3.jpeg"
import wel4 from "../picture/language/wel4.jpeg"
import border from "../picture/logo/border.png";


const Languagelist = (props)=>{
   
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
                        <img className="overfit" src={wel1}/>
                        <img src={border} onClick={onDetail} className="border" width="95%" height="95%"></img>
                        <span className="text1">키오스크! 혼자서 기계로 주문하기</span>
                    </div>
                    <div className="two">
                        <img className="overfit" src={wel2}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">인터넷으로 물건 사는 방법. 따라해 보세요!</span>
                    </div>
                    <div className="three">
                        <img className="overfit" src={wel3}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">시간이 금방 가는 뜨개질</span>
                    </div>
                    <div className="four">
                        <img className="overfit" src={wel4}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">요즘 애들과 대화할 때 필요한 모든 것!</span>
                    </div>
                </div>
            </div>
            <div className="right">
    
            </div>
        </div>
    )
}

export default Languagelist;
