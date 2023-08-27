

function MessDesc(user='yo', menssage ='csvcvsevfev efcerfrf') { 
    return ( <>
                <div className={user == 'yo' ? 'messDesc messDesc-me':'messDesc messDesc-user'}>
                    <p>
                        <span>{user}:</span><br />
                        {menssage}
                    </p>
                </div>
            </> );
}

export default MessDesc;