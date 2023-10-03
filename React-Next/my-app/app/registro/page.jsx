import Link from "next/link"

export default function Registro() {
    return (
        <div>
           <section className="form-register">
                <h4>Formulario de registro</h4>
                <input className="form-input" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" required/>
                <input className="form-input" type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" required/>
                <input className="form-input" type="email" name="correo" id="correo" placeholder="Ingrese su correo" required/>
                <input className="form-input" type="text" name="usuario" id="usuario" placeholder="Ingrese su usuario" required/>
                <input className="form-input" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su contraseña" required/>
                <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
                <Link href="/">
                    <input className="form-button" type="submit" value="Crear cuenta"/>
                </Link>
           </section>
        </div>
    )
}