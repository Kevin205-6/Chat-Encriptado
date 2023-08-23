

function MessDesc({message, user}) { 
    return ( <>
                <div className={user == 'yo' ? 'messDesc messDesc-me':'messDesc messDesc-user'}>
                    <p>
                        <span>{user}:</span><br />
                        {message}
                    </p>
                </div>
            </> );
}

export default MessDesc;