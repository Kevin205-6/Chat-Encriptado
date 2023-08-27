import { useEffect } from 'react';

function useValidarDatos(data = '', Modify) {

    useEffect(() => {
        const dataObt = data;
        let chartInval = ''
        for (const letter of dataObt) {
            let num = letter.charCodeAt(0)
            if (num < 97 || num > 122) {
                chartInval += letter;
            }
        }

        if (chartInval !== '') {
            alert('No se aceptan Mayusculas o caracteres en la calve: ' + chartInval);
        }
    }, [data]);
}

export default useValidarDatos;


