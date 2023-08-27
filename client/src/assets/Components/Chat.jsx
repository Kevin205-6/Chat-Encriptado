import { useEffect } from 'react'
import MenssageEncript from './Chat/MenssageEncript'
import Clave from './Chat/Clave.jsx'
import useManipularCont from './Hooks/useManipularCont.js'
import useMesajes from './Hooks/useMesajes.js'
import { sockect } from '../Controllers/ConectServer.js'


function Chat ({obtMenssage, ObtData}){
    let cont = 0;
    const {content, ObtCont} = useManipularCont();
    const {mensajes, EnviarMensaje, SetData, GuardarMensaje} = useMesajes();


    useEffect(()=>{
        sockect.on('recibir', (message)=>{
            GuardarMensaje('user', message)
        })
    })

    return (<>
            <section className='chat des-chat'>
                <div className="mesajes scroll-message">
                    {
                        mensajes.map((obj)=>{
                            
                            return <MenssageEncript obj={obj} ObtData={ObtData} key={cont++}/>
                        }).reverse()
                    }
                </div>
                <nav className='contenedor'>
                <div className='inChat'>
                    <Clave SetData={SetData} obtMenssage={obtMenssage}/>
                <textarea 
                    className="form-contro txtmesaje"
                    id="mesanje" 
                    placeholder='Mensaje' 
                    onChange={ObtCont}
                />
                </div>
                <button 
                    className="btn btn-success"  
                    id='enviar'
                    onClick={()=>{EnviarMensaje(content)}}
                >
                    Enviar
                </button> 
                </nav>
            </section>
    </>);
}

export default Chat;

