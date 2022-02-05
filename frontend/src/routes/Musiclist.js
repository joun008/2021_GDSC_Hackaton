import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./style/list.css"
import logo from "../picture/logo/아름들기2.png"
import song1 from "../picture/song/song1.jpeg"
import song2 from "../picture/song/song2.jpeg"
import song3 from "../picture/song/song3.jpeg"
import song4 from "../picture/song/song4.jpeg"
import border from "../picture/logo/border.png";


const Musiclist = (props)=>{
   
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
                        <img className="overfit" src={song1}/>
                        <img src={border} onClick={onDetail} className="border" width="95%" height="95%"></img>
                        <span className="text1">낭만적으로 기타 치기</span>
                    </div>
                    <div className="two">
                        <img className="overfit" src={song2}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">악보 쉽고 빠르게 익히기</span>
                    </div>
                    <div className="three">
                        <img className="overfit" src={song3}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">아름다운 찬송가 배우기</span>
                    </div>
                    <div className="four">
                        <img className="overfit" src={song4}/>
                        <img src={border} className="border" width="95%" height="95%"></img>
                        <span className="text1">송가인이 알려주는 "한 많은 대동강"</span>
                    </div>
                </div>
            </div>
            <div className="right">
    
            </div>
        </div>
    )
}

export default Musiclist;
