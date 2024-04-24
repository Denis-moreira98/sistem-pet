import { Link } from "react-router-dom";
import { useContext } from "react";
import Logo from "../../assets/img/logo.png";
import styles from "./styles.module.css";
import { Context } from "../../context/UserContext";

export function Header() {
   const { authenticated, logout } = useContext(Context);

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
               {authenticated ? (
                  <>
                     <li>
                        <Link to="/user/profile">Perfil</Link>
                     </li>
                     <li onClick={logout}>Sair</li>
                  </>
               ) : (
                  <>
                     <li>
                        <Link to="/login">Login</Link>
                     </li>
                     <li>
                        <Link to="/register">Cadastrar</Link>
                     </li>
                  </>
               )}
            </ul>
         </nav>
      </header>
   );
}
