import { useEffect } from 'react';
import MessDesc from './MessDesc.jsx'
import useMesajes from './Hooks/useMesajes.js'
import useManipularCont from './Hooks/useManipularCont.js'
import useValidarDatos from './Hooks/useValidarDatos.js'


function Desencriptar({clave, messageEnc}) {
    const   {content, ObtCont, ButtonLimpiarContent, setDataMet} = useManipularCont();
    const  {mensajes, GuardarMensaje, SetData, ButtonLimpiar } = useMesajes(false);

    let cont =0;
    let modificar = true;

    useEffect(()=>{
        modificar = true;
        setDataMet(clave)
    },[clave]);

    new useValidarDatos(content)

    useEffect(()=>{
        if(modificar=true){
            setDataMet(content)
        }
        SetData(content)
    },[content])

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
                                placeholder="Ingresa"
                                value={content}
                                onChange={ObtCont}
                                />
                        </label>
                        <button 
                            className="btn btn-primary" 
                            onClick={()=>{
                                modificar=false;
                                ButtonLimpiarContent();
                            }}
                            >
                            Nueva clave
                        </button>
                    </div>
                    
                    <div className="contenedor">
                        <button className="btn btn-danger"
                        onClick={()=>{
                            let msg = JSON.parse(messageEnc);
                            GuardarMensaje(msg.user, msg.menssage);
                        }}
                        >
                            Desencriptar
                        </button>

                        <button 
                        className="btn btn-warning"
                        onClick={ButtonLimpiar}
                        >
                            Limpiar
                        </button>
                    </div>
                </nav>
                <section id="MessDesc" className='scroll-message'>
                    {
                        mensajes.map(obj=>{
                            return <MessDesc obj={obj} key={cont++}/>
                        }).reverse()
                    }
                </section>
            </aside>
        </>
    );
}

export default Desencriptar;