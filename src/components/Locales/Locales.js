import Footer from "../Footer/Footer"
import Mapa from "../Mapa/Mapa"
import Navbar from "../Navbar/Navbar"
import "./Locales.css"
const Locales = () => {
    return (
        <>
            <Navbar />
            <body className="bodyLocales">
                <h1 className="tituloLocales">Locales Adheridos</h1>
                <Mapa />
            </body>
            <Footer />
        </>
    )
}

export default Locales