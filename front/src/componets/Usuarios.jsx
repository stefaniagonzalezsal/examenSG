import "./helpers/Usuarios.css"
import { Link } from "react-router-dom";
export function Usuarios(){
    return(
        <div>
        <div className="containedor">
            <img src="./img/google.png" alt="logo" className="logo"></img>
            <div className="contenedor1"> 
            <Link to="/home" className="home"><h1>Home</h1></Link><br />
            <Link to="/usuario" className="usuario"><h1>Usuario</h1></Link><br />
            <Link to="/" className="cerrar"><h1>Cerrar Sesión</h1></Link><br />
            </div>
        </div>
        <div className="contenedor3">
            <img src="./img/user.png" alt="persona" className="persona"></img>
            <h3>Empresa: Google</h3>
            <h3>Contratación: 11/11/2021</h3>
            <h3>Salario: 15.000.000</h3>
            <h3>Nombre: Stefania Gonzalez Salcedo</h3>
            <h3>Correo: stefaniags@gmail.com</h3>
        </div>
        </div>
    )
}
export default Usuarios