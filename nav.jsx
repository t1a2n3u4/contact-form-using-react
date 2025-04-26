// import styles from "./navigation.module.css";
// const Navigation=()=>{
//   console.log(styles);
//   return(
// <nav className={`${styles.navigation} container`}>
//   <div className="logo">
//     <img src="cfl.jpg" alt=" "></img>
//   </div>
//   <ul>
//     <li> HOME</li>
//     <li> ABOUT</li>
//     <li> CONTACT</li>

//   </ul>
// </nav>  )
// }
// export default Navigation;
import React from "react";
import styles from "./navigation.module.css";

const Navigation = () => {
  console.log(styles); // Logs the styles object, useful for debugging
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={styles.logo}>
        <img src="cfl.jpg" alt="logo" />
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}><a href="#home" className={styles.navLink}>HOME</a></li>
        <li className={styles.navItem}><a href="#about" className={styles.navLink}>ABOUT</a></li>
        <li className={styles.navItem}><a href="#contact" className={styles.navLink}>CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
