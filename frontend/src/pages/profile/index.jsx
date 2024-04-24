import styles from "./styles.module.css";
import formStyles from "../register/styles.module.css";
import { Input } from "../../components/form/input";
import { useState, useEffect } from "react";
import api from "../../utils/api";
import useFlashMessage from "../../hooks/useFlashMessage";

export function Profile() {
   const [user, setUser] = useState({});
   const [preview, setPreview] = useState();
   const [token] = useState(localStorage.getItem("token") || "");
   const { setFlashMessage } = useFlashMessage();

   const apiUrl = import.meta.env.VITE_API_URL;

   useEffect(() => {
      api.get("/users/checkuser", {
         headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
         },
      }).then((response) => {
         setUser(response.data);
      });
   }, [token]);

   function onFileChange(e) {
      setPreview(e.target.files[0]);
      setUser({ ...user, [e.target.name]: e.target.files[0] });
   }

   function handlerChange(e) {
      setUser({ ...user, [e.target.name]: e.target.value });
   }
   async function handleSubmit(e) {
      e.preventDefault();

      let msgType = "success";

      const formData = new FormData();

      await Object.keys(user).forEach((key) => formData.append(key, user[key]));

      const data = await api
         .patch(`/users/edit/${user._id}`, formData, {
            headers: {
               Authorization: `Bearer ${JSON.parse(token)}`,
               "Content-Type": "multipart/form-data",
            },
         })
         .then((response) => {
            return response.data;
         })
         .catch((err) => {
            msgType = "error";
            return err.response.data;
         });

      setFlashMessage(data.message, msgType);
   }

   return (
      <section>
         <div className={styles.profile_header}>
            <h1>Perfil</h1>
            {(user.image || preview) && (
               <img
                  src={
                     preview
                        ? URL.createObjectURL(preview)
                        : `${apiUrl}/images/users/${user.image}`
                  }
                  alt={user.name}
               />
            )}
         </div>
         <form onSubmit={handleSubmit} className={formStyles.form_container}>
            <Input
               text="Images"
               type="file"
               name="image"
               handlerOnChange={onFileChange}
            />
            <Input
               text="Email"
               type="email"
               name="email"
               placeholder="Digite o seu email"
               handlerOnChange={handlerChange}
               value={user.email || ""}
            />
            <Input
               text="Nome"
               type="text"
               name="name"
               placeholder="Digite o seu nome"
               handlerOnChange={handlerChange}
               value={user.name || ""}
            />
            <Input
               text="Telefone"
               type="text"
               name="phone"
               placeholder="Digite o seu telefone"
               handlerOnChange={handlerChange}
               value={user.phone || ""}
            />
            <Input
               text="Senha"
               type="password"
               name="password"
               placeholder="Digite a sua senha"
               handlerOnChange={handlerChange}
            />
            <Input
               text="Confirmação de senha"
               type="password"
               name="confirmpassword"
               placeholder="Confirme a sua senha"
               handlerOnChange={handlerChange}
            />
            <input type="submit" value="editar" />
         </form>
      </section>
   );
}
