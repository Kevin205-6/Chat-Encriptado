import { useState } from 'react';

function useObtMessDes() {


    /*
        * Variables y funciones que obtienen o limpia el valor del input de la clave para desencriptar 
    */
    const [inputKey, setInputValue] = useState('');


    const KeyInput = (event) => {
        setInputValue(event.target.value);
    };

    const ButtonClicNewKey = () => {
        setInputValue('');
    };

    /*
        * Variables y funciones que obtienen el valor del Radio button de los mensajes encriptados
    */

    const [infoMsgEnc, setinfoMsgEnc] = useState('');

    const InfoRadioButton = (e) => {
        setinfoMsgEnc(e.target.value);
    }



    /*
     *   Variables y funciones que obtienen o limpia los mensajes des encriptados
     */
    const [messageDes, setMessageDes] = useState([]);

    const ButtonCleanContent = () => {
        setMessageDes([]);
    }

    const ButtonSetMessDes = () => {
        console.log(infoMsgEnc);
        const obj = JSON.parse(infoMsgEnc)
        setMessageDes([...messageDes, { user: obj.user, message: obj.messageEncrip }])
        console.log(messageDes)
    }

    return { inputKey, messageDes, KeyInput, ButtonClicNewKey, ButtonSetMessDes, ButtonCleanContent, InfoRadioButton }
}

export default useObtMessDes;