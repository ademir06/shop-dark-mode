import './App.scss';
// import {useDispatch} from "react-redux";
import Header from "./components/Header/Header";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Products from "./components/page/products/Products";
import Basket from "./components/page/basket/Basket";
import Favorite from "./components/page/favorite/Favorite";
// useSelector
// useDispatch
function App() {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('dark')) || false)

    function getDark() {
        setDark(!dark)
        localStorage.setItem('dark', JSON.stringify(!dark))
    }

    // const dispatch = useDispatch()

    return (
        <div style={{
            background: dark ? '#26BDA4' : '',
            color: dark ? '#FFF' : '#FFF'
        }}>
            <Header getDark={getDark} dark={dark}/>
            <Routes>
                <Route path={'/'} element={<Products/>}/>
                <Route path={'/basket'} element={<Basket/>}/>
                <Route path={'/favorite'} element={<Favorite/>}/>
            </Routes>
        </div>
    );
}

export default App;
