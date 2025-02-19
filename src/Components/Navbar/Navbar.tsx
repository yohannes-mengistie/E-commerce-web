import React from 'react'
import styles from './Navbar.module.css'
import shopping from '../Assets/shopping.png'
import logo from '../Assets/logo.jpg'

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
          <li onClick={() => eventHandeler({ data: "shop" })}>Shop {menu === "shop" ? <hr/> :null}</li>
          <li onClick={() => eventHandeler({ data: "men" })}>Men {menu === "men" ? <hr/> : null } </li>
          <li onClick={() => eventHandeler({ data: "women" })}>Women {menu === "women" ?<hr/> : null}</li>
          <li onClick={() => eventHandeler({ data: "kids" })}>Kids {menu === "kids" ? <hr/> : null}</li>
        </ul>

        <div className={styles.navlogincart}>
            <button>Login</button>
            <img src={shopping} alt="" />
            <div className={styles.navcartcount}>0</div>
        </div>

        
        
    </div>
  )
}
