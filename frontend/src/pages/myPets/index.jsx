import api from "../../utils/api";
import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ImageProfile } from "../../components/imageProfile";
import useFlashMessage from "../../hooks/useFlashMessage";

export function MyPets() {
   const [pets, setPets] = useState([]);
   const [token] = useState(localStorage.getItem("token") || "");
   // eslint-disable-next-line no-unused-vars
   const { setFlashMessage } = useFlashMessage();

   const apiUrl = import.meta.env.VITE_API_URL;

   useEffect(() => {
      api.get("/pets/mypets", {
         headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
         },
      })
         .then((response) => {
            setPets(response.data.pets);
         })
         .catch((err) => console.log(err));
   }, [token]);

   return (
      <sqction>
         <div className={styles.petslist_header}>
            <h1>Meus Pets</h1>
            <Link to="/pet/add">Cadastrar Pet</Link>
         </div>
         <div className={styles.petlist_container}>
            {pets.length > 0 &&
               pets.map((pet) => (
                  <div key={pet._id} className={styles.petlist_row}>
                     <ImageProfile
                        src={`${apiUrl}/images/pets/${pet.images[0]}`}
                        alt={pet.name}
                        width="px75"
                     />
                     <span className="bold">{pet.name}</span>
                     <div className={styles.actions}>
                        {pet.available ? (
                           <>
                              {pet.adopter && (
                                 <button className={styles.conclude_btn}>
                                    Concluir adoção
                                 </button>
                              )}
                              <Link to={`/pet/edit/${pet._id}`}>Editar</Link>
                              <button>Excluir</button>
                           </>
                        ) : (
                           <p>Pet já adotado</p>
                        )}
                     </div>
                  </div>
               ))}
         </div>
         {pets.length === 0 && <p>Não há Pets cadastrados</p>}
      </sqction>
   );
}
