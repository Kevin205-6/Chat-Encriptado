import Desencriptar from './Desencriptar.jsx';
import useObtData from './Hooks/useObtData.js'

import Chat from './Chat.jsx';



function Content() {

    const { content, data, SetData, ObtData } = useObtData()
    
    return ( <>
                <main>
                    <Chat obtMenssage={SetData} ObtData={ObtData}/>
                    <Desencriptar clave={content} messageEnc={data} />
                </main>
            </> );
}

export default Content;