import { StyleProvider } from "@ant-design/cssinjs";
import User from "../../routers/user.route";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ScrollUp from "../../components/scrollUp";


export default function DefaultLayoutUser() {
    return (
      <StyleProvider hashPriority="high">
        <main className="">
        <Header />
        <User/>
        <ScrollUp/>
        <Footer />  
        </main>
      </StyleProvider>
    );
  }