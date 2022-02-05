import AppRouter from './Router';
import React, {useState} from 'react';

function App() {
    const [isLogin,setIsLogin] =useState(false);
    const [category,setCategory] = useState(0);
    return(
        <div>
            <AppRouter
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                >
            </AppRouter>
        </div>
    )
}

export default App;