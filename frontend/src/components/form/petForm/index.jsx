import { useState } from "react";
import formStyles from "../../../pages/register/styles.module.css";
import { Input } from "../input";
import { Select } from "../select";

export function PetForm({ petData, btnText, handleSubmit }) {
   const [pet, setPet] = useState(petData || {});
   const [preview, setPreview] = useState([]);

   const apiUrl = import.meta.env.VITE_API_URL;

   const colors = ["Branco", "Preto", "Cinza", "Caramelo", "Mesclado"];

   function onFileChange(e) {
      setPreview(Array.from(e.target.files));
      setPet({ ...pet, images: [...e.target.files] });
   }

   function handleChange(e) {
      setPet({ ...pet, [e.target.name]: e.target.value });
   }

   function handleColor(e) {
      setPet({
         ...pet,
         color: e.target.options[e.target.selectedIndex].text,
      });
   }

   function submit(e) {
      e.preventDefault();
      handleSubmit(pet);
   }

   return (
      <form onSubmit={submit} className={formStyles.form_container}>
         <div className={formStyles.preview_pet_images}>
            {preview.length > 0
               ? preview.map((image, index) => (
                    <img
                       src={URL.createObjectURL(image)}
                       alt={pet.name}
                       key={`${pet.name}+${index}`}
                    />
                 ))
               : pet.images &&
                 pet.images.map((image, index) => (
                    <img
                       src={`${apiUrl}/images/pets/${image}`}
                       alt={pet.name}
                       key={`${pet.name}+${index}`}
                    />
                 ))}
         </div>

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
