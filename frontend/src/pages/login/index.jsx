import { useState, useContext } from "react";
import { Input } from "../../components/form/input";
import { Link } from "react-router-dom";
import styles from "../register/styles.module.css";
import { Context } from "../../context/UserContext";

export function Login() {
   const [user, setUser] = useState({});
   const { login } = useContext(Context);

   function handleChange(e) {
      setUser({ ...user, [e.target.name]: e.target.value });
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      login(user);
   };

   return (
      <section className={styles.form_container}>
         <h1>Login</h1>
         <form onSubmit={handleSubmit}>
            <Input
               text="Email"
               type="email"
               name="email"
               placeholder="Digite o seu email"
               handlerOnChange={handleChange}
            />
            <Input
               text="Senha"
               type="password"
               name="password"
               placeholder="Digite a sua senha"
               handlerOnChange={handleChange}
            />
            <input type="submit" value="Entrar" />
         </form>
         <p>
            Não tem conta? <Link to="/register">Clique aqui.</Link>
         </p>
      </section>
   );
}
