import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Message } from "./components/flashMessage";
import { Container } from "./components/container";
import { Profile } from "./pages/profile";
import { MyPets } from "./pages/myPets";
import { AddPet } from "./pages/addPet";
import { EditPet } from "./pages/editPet";
import { PetDetails } from "./pages/petDatails";

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
               <Route path="/pet/:id" element={<PetDetails />} />
            </Routes>
         </Container>
         <Footer />
      </>
   );
}

export default App;
