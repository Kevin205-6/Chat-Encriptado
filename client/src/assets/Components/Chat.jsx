import { useState } from 'react';

function Chat (){

    const [mesanje, setMensaje] = useState('');

    const handleSumit = (e) => {
         
        e.preventDefault()
        console.log(mesanje)
        socket.emit('mensj',mesanje)
    }

    return (<>
            <section className='chat'>
                <div className="mesajes">


                </div>

                <nav className='op'>
                

               <form onSubmit={handleSumit}>

               <label htmlFor="clave" className='claveDesc' >Clave: </label>

                <input type="text" placeholder="Clave" id="keyDesc" className="form-control" />
                <button className="btn btn-secondary">Limpiar</button>

                    <br />

                    <textarea id="mesanje" cols="30" rows="10" onChange={e => setMensaje(e.target.value)}></textarea>


                    <button className="btn btn-success" onSubmit={handleSumit}>Enviar</button> 

               </form>

                </nav>
            </section>
    </>);
}

export default Chat;