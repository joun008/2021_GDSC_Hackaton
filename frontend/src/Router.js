import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from "./routes/Main";
import Login from "./routes/Login";
import Signup from "./routes/Signup"
import Detail from "./routes/Detail"
import Cooklist from "./routes/Cooklist"
import Healthlist from './routes/Healthlist';
import Languagelist from './routes/Languagelist';
import Musiclist from  './routes/Musiclist';
const AppRouter = ({isLogin,setIsLogin}) =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/Login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/Signup" element={<Signup isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/Cooklist" element={<Cooklist isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/Healthlist" element={<Healthlist isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/Languagelist" element={<Languagelist isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/Musiclist" element={<Musiclist isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
                <Route path="/detail" element={<Detail isLogin={isLogin} setIsLogin={setIsLogin}/>}></Route>
            </Routes>
        </Router>   
    )
}

export default AppRouter;