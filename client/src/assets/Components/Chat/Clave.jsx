import { useEffect } from 'react';
import useManipularCont from '../Hooks/useManipularCont'

function Clave({SetData, obtMenssage}) {
    const {content, ButtonLimpiarContent, ObtCont} = useManipularCont();

    useEffect(()=>{
        SetData(content)
        obtMenssage(content)
    },[content])

    return ( <>
        <div className='contenedor allespace'>
            <label htmlFor="clave" className='claveDesc' >
                Clave: 
            </label>
            <input 
                type="text" 
                placeholder="Clave" 
                id="clave" 
                className="form-control" 
                value={content}
                onChange={ObtCont}
                />
            <button  className="btn btn-primary" onClick={ButtonLimpiarContent}>Limpiar</button>
        </div>
    </> );
}

export default Clave;