import { Link } from "react-router-dom";
import "./helpers/principal.css"
export function Home(){
    return(
         <div>
            <div className="containedor">
                <img src="./img/logo.jpg" alt="logo" className="logo"></img>
                <div className="contenedor1"> 
                <Link to="/home" className="home"><h1>Home</h1></Link><br />
                <Link to="/usuario" className="usuario"><h1>Usuario</h1></Link><br />
                <Link to="/" className="cerrar"><h1>Cerrar Sesión</h1></Link><br />
                </div>
            </div>
            <h1 className="panel">Panel de control</h1>
         </div>
    );
}
export default Home