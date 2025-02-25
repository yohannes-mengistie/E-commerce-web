import React, { useContext, useRef } from 'react'
import styles from './Navbar.module.css'
import shopping from '../Assets/shopping.png'
import logo from '../Assets/logo.jpg'
import { Link } from 'react-router-dom'
import {ShopContext} from '../../Context/ShopContext'
import dropDown from '../Assets/dropDown_arrow.png'

export const Navbar = () => {
  const [menu,setMenu] = React.useState("shop");
  interface EventHandlerProps {
    data: string;
  }

  function eventHandeler({ data }: EventHandlerProps): void {
    setMenu(data);
  }
  const shopContext = useContext(ShopContext)
      if (!shopContext) {
          return null
      }
  const menuRef = useRef<HTMLUListElement | null>(null);
  function dropDown_toggle(event: { target: { classList: { toggle: (arg0: string) => void } } }){
      if (menuRef.current) {
        menuRef.current.classList.toggle(styles.navvisible);
      }
      event.target.classList.toggle('open');
  }
  const {getTotalCartAmounts} = shopContext;
  return (
    <div className={styles.navbar}>
        <div className={styles.navlogo}>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <img className={styles.navdropdown} onClick={()=>dropDown_toggle} src={dropDown} alt="" />
        <ul ref={menuRef} className={styles.navmenu}>
          <li onClick={() => eventHandeler({ data: "shop" })}><Link to='/'>Shop</Link>  {menu === "shop" ? <hr/> :null}</li>
          <li onClick={() => eventHandeler({ data: "men" })}><Link to='.mens'>Men</Link> {menu === "men" ? <hr/> : null } </li>
          <li onClick={() => eventHandeler({ data: "women" })}> <Link to='/women'>Women</Link> {menu === "women" ?<hr/> : null}</li>
          <li onClick={() => eventHandeler({ data: "kids" })}><Link to='kid'>Kids</Link> {menu === "kids" ? <hr/> : null}</li>
        </ul>

        <div className={styles.navlogincart}>
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
            
            <Link to='/cart'><img src={shopping} alt="" /></Link>
            
            <div className={styles.navcartcount}>{getTotalCartAmounts()}</div>
        </div>

        
        
    </div>
  )
}
