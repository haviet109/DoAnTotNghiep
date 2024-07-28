import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
            <p>Mini Store được phân bổ nhiều trên thế giới nhằm cải thiện các mô hình kinh doanh bán hàng nhỏ, thuận tiện trong việc bán hàng.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Cửa hàng</h2>
            <ul>
                <li>Trang Chủ</li>
                <li>Về Chúng Tôi</li>
                <li>Phương Thức Thanh Toán</li>
                <li>Bảo mật thông tin</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Liên hệ</h2>
            <ul>
                <li>+89: 032155112</li>
                <li>ministore@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © MiniStore - All Right Reserved.</p>
    </div>
  )
}

export default Footer
