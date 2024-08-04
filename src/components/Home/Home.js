import { useContext } from "react"
import Context from "../../context"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"

const Home = () => {
    const { logged } = useContext(Context)
    return (
        <>
            {logged ? <Navbar /> : <Hero />}
        </>
    )
}

export default Home