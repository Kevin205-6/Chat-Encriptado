// import useObtMessDes from './Hooks/useObtMessDes.js';
import MessDesc from './MessDesc.jsx'

function Desencriptar() {
    let num =1;
    // const {inputKey, messageDes, KeyInput, ButtonClicNewKey, ButtonSetMessDes, ButtonCleanContent} = useObtMessDes();

    return ( 
        <>
            <aside className="desencriptar des-chat">
                <nav className="contPrincipal">
                    <div className="contenedor">
                        <label className="claveDesc" htmlFor='keyDesc'>
                            Clave:
                            <input type="text" 
                                id="keyDesc" 
                                className="form-control" 
                                placeholder="Ingresa"/>
                        </label>
                        <button 
                            className="btn btn-primary" 
                            >
                            Nueva clave
                        </button>
                    </div>
                    <div >
                        <p><span>Mensaje:</span></p>
                    </div>
                    <div className="contenedor">
                        <button className="btn btn-danger"
                        >
                            Desencriptar
                        </button>
                        <button 
                        className="btn btn-warning"
                        >
                            Limpiar
                        </button>
                    </div>
                </nav>
                <section id="MessDesc" className='scroll-message'>
                    {/* {
                        
                        messageDes.map(({user, message}) =>{
                            return <MessDesc message={message + num++} user={user.toString()} key={num}/>
                            
                        }).reverse()
                    } */}
                </section>
            </aside>
        </>
    );
}

export default Desencriptar;