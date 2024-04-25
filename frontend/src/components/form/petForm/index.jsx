import { useState } from "react";
import styles from "../../../pages/register/styles.module.css";
import { Input } from "../input";
import { Select } from "../select";

export function PetForm({ petData, btnText, handleSubmit }) {
   const [pet, setPet] = useState(petData || {});
   // const [preview, setPreview] = useState([]);

   const colors = ["Branco", "Preto", "Cinza", "Caramelo", "Mesclado"];

   function onFileChange(e) {
      setPet({ ...pet, image: [...e.target.files] });
   }

   function handleChange(e) {
      setPet({ ...pet, [e.target.name]: e.target.value });
   }

   function handleColor(e) {
      setPet({ ...pet, color: e.target.options[e.target.selected].text });
   }

   function submit(e) {
      e.preventDefault();
      console.log(pet);
      handleSubmit(pet);
   }

   return (
      <form onSubmit={submit} className={styles.form_container}>
         <Input
            text="Imagens do Pet"
            type="file"
            name="images"
            handlerOnChange={onFileChange}
            multiple={true}
         />

         <Input
            text="Nome do pet"
            type="text"
            name="name"
            placeholder="Digite o seu"
            handlerOnChange={handleChange}
            value={pet.name || ""}
         />
         <Input
            text="Idade do pet"
            type="text"
            name="age"
            placeholder="Digite a idade"
            handlerOnChange={handleChange}
            value={pet.age || ""}
         />
         <Input
            text="Peso do pet"
            type="text"
            name="weight"
            placeholder="Digite o peso"
            handlerOnChange={handleChange}
            value={pet.weight || ""}
         />
         <Select
            name="color"
            text="Selecione a cor"
            options={colors}
            handleOnChange={handleColor}
            value={pet.color || ""}
         />
         <input type="submit" value={btnText} />
      </form>
   );
}
