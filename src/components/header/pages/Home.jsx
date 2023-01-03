import Header from "../Header.jsx";
import Banner from "../../Banner/Banner.jsx"
import Categorias from "../../Categorias.jsx"
import Lista from "../../Lista.jsx"
import Destaques from "../../Destaques.jsx"
import Footer from "../../Footer.jsx"
export default function Home(){
    return(
        <>
            <Header />
            <Banner />
            <Categorias />
            <Lista />
            <Destaques />
            <Footer />
        </>
    );
}