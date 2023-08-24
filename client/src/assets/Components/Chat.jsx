
function Chat (){
    return (<>
            <section>
                <div className="mesajes">


                </div>
                <nav className="Menu --bs-light-bg-subtle">
                <div className="bg-primary-subtle">

                <label htmlFor="clave"className="form-control" >Clave: </label>

                    < input type="text" placeholder="Clave" />
                    <button className="btn btn-secondary">Limpiar</button>
                    <br />
                    <textarea id="mesanje" cols="30" rows="10"></textarea>

                </div>
                   <button className="btn btn-success">Enviar</button> 

                </nav>
            </section>
    </>);
}

export default Chat;