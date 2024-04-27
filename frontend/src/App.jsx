import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Message } from "./components/flashMessage";
import { Container } from "./components/container";

// Paginas
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { AddPet } from "./pages/addPet";
import { MyPets } from "./pages/myPets";
import { EditPet } from "./pages/editPet";
import { PetDetails } from "./pages/petDatails";
import { MyAdoptions } from "./pages/myAdoptions";

function App() {
   return (
      <>
         <Header />
         <Message />
         <Container>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<Login />} />
               <Route path="/user/profile" element={<Profile />} />
               <Route path="/pet/add" element={<AddPet />} />
               <Route path="/pet/mypets" element={<MyPets />} />
               <Route path="/pet/edit/:id" element={<EditPet />} />
               <Route path="/pet/myadoption" element={<MyAdoptions />} />
               <Route path="/pet/:id" element={<PetDetails />} />
            </Routes>
         </Container>
         <Footer />
      </>
   );
}

export default App;
