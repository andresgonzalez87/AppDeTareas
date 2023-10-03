"use client"
import Link from "next/link"

export default function HomePage() {
    return(
        <div>
            <section className="form-register">
                <h4>Iniciar sesión</h4>
                <input className="form-input" type="text" name="usuario" id="usuario" placeholder="Ingrese su usuario" required/>
                <input className="form-input" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su contraseña" required/>
                <Link href="tareas">
                    <input className="form-button" type="submit" value="Iniciar sesión"/>
                </Link>
                <Link href="registro">
                    <p>¿Aún no tienes cuenta?</p>
                </Link>
            </section>
        </div>
    )
}