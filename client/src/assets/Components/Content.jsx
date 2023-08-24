import Desencriptar from './Desencriptar.jsx';

import useObtMessDes from './Hooks/useObtMessDes.js';

import Chat from './Chat.jsx';



function Content() {
    const {inputKey, messageDes, KeyInput, ButtonClicNewKey, ButtonSetMessDes, ButtonCleanContent, InfoRadioButton} = useObtMessDes();
    return ( <>
                <main>
                    <Chat user="yo"/>
                    <Desencriptar inputKey={inputKey} 
                    messageDes={messageDes} 
                    KeyInput={KeyInput} 
                    ButtonClicNewKey={ButtonClicNewKey} 
                    ButtonSetMessDes={ButtonSetMessDes} 
                    ButtonCleanContent={ButtonCleanContent}/>
                </main>
            </> );
}

export default Content;