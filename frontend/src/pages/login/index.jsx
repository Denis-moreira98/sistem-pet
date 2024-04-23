import { useState } from "react";
import { Input } from "../../components/form/input";
import { Link } from "react-router-dom";
import styles from "../register/styles.module.css";

export function Login() {
   const [user, setUser] = useState({});

   function handleChange(e) {
      setUser({ ...user, [e.target.name]: e.target.value });
   }

   // const handleSubmit = (e) => {
   //    e.preventDefault();
   //    login(user);
   // };

   return (
      <section className={styles.form_container}>
         <h1>Login</h1>
         <form>
            <Input
               text="E-mail"
               type="email"
               name="email"
               placeholder="Digite o e-mail"
               handleOnChange={handleChange}
            />
            <Input
               text="Senha"
               type="password"
               name="password"
               placeholder="Digite a senha"
               handleOnChange={handleChange}
            />
            <input type="submit" value="Entrar" />
         </form>
         <p>
            Não tem conta? <Link to="/register">Clique aqui.</Link>
         </p>
      </section>
   );
}
