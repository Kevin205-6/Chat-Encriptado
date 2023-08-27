import { useEffect, useState } from 'react';
import useManipularCont from './useManipularCont.js'
import { SendMessage } from '../../Controllers/ConectServer.js'

function useMensajes(encriptar = true) {
    const { content, SetData } = useManipularCont();

    const [mensajes, SetMensajes] = useState([]);

    const GuardarMensaje = (user, mensaje) => {
        let msg = (encriptar === true ? mensaje : Desencriptar(mensaje, content))
        SetMensajes([...mensajes, {
            user: user,
            menssage: mensaje
        }]);
    }

    const EnviarMensaje = (mensaje) => {

        let msg = Encriptar(mensaje, content);

        SendMessage(msg)

        SetMensajes([...mensajes, {
            user: 'yo',
            menssage: msg
        }]);
    }

    const ButtonLimpiar = () => {
        SendMessage([]);
    }

    return { mensajes, GuardarMensaje, SetData, EnviarMensaje, ButtonLimpiar };
}

export default useMensajes;

function Encriptar(mensaje, key) {
    return mensaje
}

function Desencriptar(mensaje, key) {
    return mensaje
}
