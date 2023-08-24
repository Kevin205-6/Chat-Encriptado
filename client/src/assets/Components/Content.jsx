import Desencriptar from './Desencriptar.jsx';
import useObtMessDes from './Hooks/useObtMessDes.js';
// import Prueba from './Prueba.jsx'

function Content() {
    const {inputKey, messageDes, KeyInput, ButtonClicNewKey, ButtonSetMessDes, ButtonCleanContent, InfoRadioButton} = useObtMessDes();
    return ( <>
                <main>
                    <h1>Hola mundo</h1>
                    <Desencriptar inputKey={inputKey} 
                    messageDes={messageDes} 
                    KeyInput={KeyInput} 
                    ButtonClicNewKey={ButtonClicNewKey} 
                    ButtonSetMessDes={ButtonSetMessDes} 
                    ButtonCleanContent={ButtonCleanContent}/>
                    {/* <Prueba InfoRadioButton={InfoRadioButton}/> */}
                </main>
            </> );
}

export default Content;