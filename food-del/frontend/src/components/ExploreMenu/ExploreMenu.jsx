import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Danh Sách Sản phẩm</h1>
      <p className='explore-menu-text'>Chọn từ thực đơn đa dạng với một loạt các món ăn ngon miệng. Nhiệm vụ của chúng tôi là thỏa mãn cơn thèm của bạn và nâng cao trải nghiệm ăn uống của bạn, mỗi lần một bữa ăn ngon.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
