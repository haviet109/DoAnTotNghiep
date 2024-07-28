import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({ setShowLogin }) => {

    const { setToken, url,loadCartData } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign Up");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault()

        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        }
        else {
            new_url += "/api/user/register"
        }
        const response = await axios.post(new_url, data);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            loadCartData({token:response.data.token})
            setShowLogin(false)
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2> <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" ? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Tên người dùng' required /> : <></>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder=' Vui lòng nhập email' />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Vui lòng nhập mật khẩu' required />
                </div>
                <button>{currState === "Login" ? "Login" : "Thêm mới tài khoản !"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required/>
                    <p>Bằng cách tiếp tục, tôi đồng ý với các điều khoản sử dụng và chính sách quyền riêng tư..</p>
                </div>
                {currState === "Login"
                    ? <p>Tạo tài khoản mới?
 <span onClick={() => setCurrState('Sign Up')}>Click here!</span></p>
                    : <p>Bạn đã sẵn sàng để tạo tài khoản ? <span onClick={() => setCurrState('Login')}>Đăng nhập </span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
