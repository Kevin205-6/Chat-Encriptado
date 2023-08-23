import MessDesc from './MessDesc.jsx';

function Desencriptar() {
    return ( 
        <>
            <aside className="desencriptar">
                <nav className="contPrincipal">
                    <div className="contenedor">
                        <label className="claveDesc">
                            Clave:
                            <input type="text" id="keyDesc" className="form-control" placeholder="Ingresa"/>
                        </label>
                        <button className="btn btn-primary">
                            Nueva clave
                        </button>
                    </div>
                    <div >
                        <p><span>Mensaje:</span></p>
                    </div>
                    <div className="contenedor">
                        <button className="btn btn-danger">Desencriptar</button>
                        <button className="btn btn-warning">Limpiar</button>
                    </div>
                </nav>
                <section>
                    <MessDesc message="Hola dsyvjcs cjhvsh" user="yo"/>
                    <MessDesc message="Hola" user="userio"/>
                    <MessDesc message="Hola" user="yo"/>
                </section>
            </aside>
        </>
    );
}

export default Desencriptar;