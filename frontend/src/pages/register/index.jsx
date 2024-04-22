import { Input } from "../../components/form/input";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export function Register() {
   function handleChange() {}

   return (
      <section className={styles.form_container}>
         <h1>Registrar</h1>
         <form>
            <Input
               text="Nome"
               type="text"
               name="name"
               placeholder="Digite o seu nome"
               handlerOnChange={handleChange}
            />
            <Input
               text="Telefone"
               type="text"
               name="phone"
               placeholder="Digite o seu telefone"
               handlerOnChange={handleChange}
            />
            <Input
               text="Email"
               type="text"
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
            <Input
               text="Confirmação de senha"
               type="password"
               name="confirmpassword"
               placeholder="Confirme a sua senha"
               handlerOnChange={handleChange}
            />
            <input type="submit" value="Cadastrar" />
         </form>
         <p>
            Já tem conta? <Link to="/login">Clique aqui.</Link>
         </p>
      </section>
   );
}
