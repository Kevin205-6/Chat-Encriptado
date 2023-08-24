// import useObtMessDes from './Hooks/useObtMessDes.js';
import MessDesc from './MessDesc.jsx'

function Desencriptar({inputKey, messageDes, KeyInput, ButtonClicNewKey, ButtonSetMessDes, ButtonCleanContent}) {
    let num =1;
    // const {inputKey, messageDes, KeyInput, ButtonClicNewKey, ButtonSetMessDes, ButtonCleanContent} = useObtMessDes();

    return ( 
        <>
            <aside className="desencriptar">
                <nav className="contPrincipal">
                    <div className="contenedor">
                        <label className="claveDesc" htmlFor='keyDesc'>
                            Clave:
                            <input type="text" 
                                id="keyDesc" 
                                className="form-control" 
                                value={inputKey}
                                onChange={KeyInput}
                                placeholder="Ingresa"/>
                        </label>
                        <button 
                            className="btn btn-primary" 
                            onClick={ButtonClicNewKey}>
                            Nueva clave
                        </button>
                    </div>
                    <div >
                        <p><span>Mensaje:</span></p>
                    </div>
                    <div className="contenedor">
                        <button className="btn btn-danger"
                        // onClick={ButtonGetContent}
                        onClick={ButtonSetMessDes}
                        >
                            Desencriptar
                        </button>
                        <button 
                        className="btn btn-warning"
                        onClick={ButtonCleanContent}
                        >
                            Limpiar
                        </button>
                    </div>
                </nav>
                <section id="MessDesc" className='scroll-message'>
                    {
                        
                        messageDes.map(({user, message}) =>{
                            return <MessDesc message={message + num++} user={user.toString()} key={num}/>
                            
                        }).reverse()
                    }
                </section>
            </aside>
        </>
    );
}

export default Desencriptar;