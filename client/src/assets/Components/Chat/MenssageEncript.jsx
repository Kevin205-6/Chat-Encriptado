
function MenssageEncript({obj}) {
    return ( <>
        <div className={obj.user == 'yo' ? 'messDesc messDesc-me':'messDesc messDesc-user'}>
            
            <label htmlFor="MessEnc">
                <input type="radio" name="msgEncri" value={JSON.stringify(obj)} id='MessEnc' />
                <b>{obj.user}:</b><br />
                {obj.menssage}
            </label>

        </div>
    </>  );
}

export default MenssageEncript;