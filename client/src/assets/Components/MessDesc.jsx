

function MessDesc({obj}) { 
    return ( <>
                <div className={obj.user == 'yo' ? 'messDesc messDesc-me':'messDesc messDesc-user'}>
                    <p>
                        <span>{obj.user}:</span><br />
                        {obj.menssage}
                    </p>
                </div>
            </> );
}

export default MessDesc;