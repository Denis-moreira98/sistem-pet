import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import styles from "./styles.module.css";

export function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.logo}>
            <img src={Logo} alt="Get a Pet" />
            <h2>Get a Pet</h2>
         </div>
         <nav className={styles.navbar}>
            <ul>
               <li>
                  <Link to="/">Adotar</Link>
               </li>
               <li>
                  <Link to="/login">Login</Link>
               </li>
               <li>
                  <Link to="/register">Cadastrar</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}
