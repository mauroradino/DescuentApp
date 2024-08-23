import { Pacifico } from "next/font/google";
import Link from "next/link";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"], display: "swap" })
export default function Home() {

  return (
    <div className=" flex flex-col justify-center h-screen px-4 py-5 text-center">
      <h1 className={`text-white text-6xl ${pacifico.className}`}>D</h1>
      <h2 className="text-white text-4xl mb-3 font-bold">DescuentApp</h2>
      <div className="col-lg-6 mx-auto">
        <p className="text-white text-sm mb-6">La app que te da los mejores descuentos en los negocios de tu zona</p>
        <div className="flex flex-col justify-center gap-4">
          <Link href="/Locales" className="bg-white p-3 text-custom-red rounded-lg gap-3 outline-none hover:bg-gray-200">Inicia Sesión</Link>
          <Link href="/Login" className="bg-transparent border-2 p-3 rounded-lg border-white text-white outline-none hover:bg-gray-100 hover:text-custom-red">Registrate</Link>
        </div>
      </div>
    </div>
  );
}
