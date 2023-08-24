import { useState } from 'react';

function useObtMessDes() {

    const [inputKey, setInputValue] = useState('');
    const [messageDes, setMessageDes] = useState([]);

    const KeyInput = (event) => {
        setInputValue(event.target.value);
    };

    const ButtonClicNewKey = () => {
        setInputValue('');
    };

    const ButtonCleanContent = () => {
        setMessageDes([]);
    }

    const ButtonSetMessDes = () => {
        setMessageDes([...messageDes, { user: inputKey, message: "cj bchjfsb kjevdf jke" }])
        console.log(messageDes)
    }

    return { inputKey, messageDes, KeyInput, ButtonClicNewKey, ButtonSetMessDes, ButtonCleanContent }
}

export default useObtMessDes;