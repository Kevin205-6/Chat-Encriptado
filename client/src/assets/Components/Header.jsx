import {Button} from 'react-bootstrap';

function Header() {
    return (
    <header>
        <a href="http://localhost:5173/">
            <button className='btn btn-primary'>Reiniciar</button>
        </a>
    </header>);
}

export default Header;