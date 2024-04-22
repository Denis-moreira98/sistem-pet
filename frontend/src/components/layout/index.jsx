import { Container } from "../container";
import { Footer } from "../footer";
import { Header } from "../header";
import { Outlet } from "react-router-dom";
import { Message } from "../flashMessage/index";

export function Layout() {
   return (
      <>
         <Header />
         <Message />
         <Container>
            <Outlet />
         </Container>
         <Footer />
      </>
   );
}
