import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Message } from "./components/flashMessage";
import { Container } from "./components/container";

function App() {
   return (
      <>
         <Header />
         <Message />
         <Container>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
            </Routes>
         </Container>
         <Footer />
      </>
   );
}

export default App;
