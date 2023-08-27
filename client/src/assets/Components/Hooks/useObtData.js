import { useState } from 'react';
import useManipularCont from './useManipularCont.js'

function useObtData() {
    const [data, setData] = useState('')
    const { content, SetData } = useManipularCont();

    const ObtData = (event) => {
        setData(event.target.value);
    }


    return { content, data, SetData, ObtData }
}

export default useObtData;