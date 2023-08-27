import { useState } from 'react';

function useManipularCont() {
    const [content, setContent] = useState('');

    const ObtCont = (event) => {
        setContent(event.target.value);
    }

    const ButtonLimpiarContent = () => {
        setContent('');
    }

    const SetData = (value) => {
        setContent(value)
    }
    return { content, ObtCont, ButtonLimpiarContent, SetData };
}

export default useManipularCont;