import Servidor from './src/Servidor.js'
import 'dotenv/config'


function main() {
    console.log(process.env.PORT);
    const ser = new Servidor();
}

main();