import React,{useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import logo from "../picture/logo/아름들기2.png"

const Detail = (props) =>{
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

    return(
        <div>
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
            <div className="con-1">
                <div className="detail-title">
                    <h2>손주가 좋아하는 빵 만들기</h2>
                </div>

                <div className="detail-content">
                    <h3>밥보다는 빵을 좋아하는 손주를 위해, 빵을 만들어 주고 싶은 당신을 위한 강의입니다. 맛있고 만들기도 쉬운 빵 8가지를 배울 수 있습니다.</h3>
                </div>
                <div className="detail-video">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/Lsqfe8NfzGY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                </div>
            </div>
        </div>
    )
}

export default Detail