import React from 'react'
import styles from './Navbar.module.css'
import shopping from '../Assets/shopping.png'
import logo from '../Assets/logo.jpg'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [menu,setMenu] = React.useState("shop");
  interface EventHandlerProps {
    data: string;
  }

  function eventHandeler({ data }: EventHandlerProps): void {
    setMenu(data);
  }
  return (
    <div className={styles.navbar}>
        <div className={styles.navlogo}>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className={styles.navmenu}>
          <li onClick={() => eventHandeler({ data: "shop" })}><Link to='/'>Shop</Link>  {menu === "shop" ? <hr/> :null}</li>
          <li onClick={() => eventHandeler({ data: "men" })}><Link to='.mens'>Men</Link> {menu === "men" ? <hr/> : null } </li>
          <li onClick={() => eventHandeler({ data: "women" })}> <Link to='/women'>Women</Link> {menu === "women" ?<hr/> : null}</li>
          <li onClick={() => eventHandeler({ data: "kids" })}><Link to='kid'>Kids</Link> {menu === "kids" ? <hr/> : null}</li>
        </ul>

        <div className={styles.navlogincart}>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={shopping} alt="" /></Link>
            
            <div className={styles.navcartcount}>0</div>
        </div>

        
        
    </div>
  )
}
