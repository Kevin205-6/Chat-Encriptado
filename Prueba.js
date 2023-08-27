
class Vigenere {
    constructor(num = true) {
        this.alphabet = num === true ? ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z'] : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z'];
        this.message = [];
        this.clave = [];
        this.arrayNewMess = [];
    }

    SetMessage(message) {
        this.ArrayTraversal(message, this.ConvertMessage.bind(this))
        console.log(this.message);
    }

    SetKey(key) {
        this.ArrayTraversal(key, this.ConvertKey.bind(this));
        console.log(this.clave);
    }

    ConvertMessage(num) {
        this.message.push(num)
    }

    ConvertKey(num) {
        this.clave.push(num)
    }

    ArrayTraversal(txt, Method) {
        let text = txt;
        for (const letter of text) {
            let num;
            num = this.ConvertNum(letter);
            Method(num);
        }
    }

    ConvertNum(letter) {
        let num = 0;
        if (letter != ' ') {
            this.alphabet.map((item, i) => {
                letter === item ? num = i : 0;
            });
        } else {
            num = ' ';
        }

        return num;
    }

    Process(Method) {
        let index = 0;

        this.message.map(letter => {
            if (letter === ' ') {
                this.arrayNewMess.push(letter);
            } else {
                index > (this.clave.length - 1) ? index = 0 : false;
                let newLetter = Method(letter, this.clave[index]);
                index++;
                this.arrayNewMess.push(newLetter);
            }
        })
    }

    VigenereCipher(letterMess, letterKey) {
        return ((letterMess + letterKey) % this.alphabet.length);
    }

    VigenereDecipher(letterMess, letterKey) {
        let n = ((letterMess - letterKey) % this.alphabet.length)
        if (n < 0) {
            n += this.alphabet.length;
        }
        return n
    }

    ConvertText() {
        console.log(this.arrayNewMess)
        let newMessage = '';
        this.arrayNewMess.map(num => {
            if (num === ' ') {
                newMessage += num;
            } else {
                newMessage += this.alphabet[num];
            }

        })
        return newMessage;
    }

    Cipher(message, key) {
        this.SetMessage(message);
        this.SetKey(key);
        this.Process(this.VigenereCipher.bind(this));
        return this.ConvertText();
    }

    Decipher(message, key) {
        this.SetMessage(message);
        this.SetKey(key);
        this.Process(this.VigenereDecipher.bind(this));
        return this.ConvertText();
    }

}

const algoritmo1 = new Vigenere()
const algoritmo2 = new Vigenere()

console.log(algoritmo1.Cipher('hola soy kevinz', 'cba'));
console.log(algoritmo2.Decipher('jplc toa lexjnb', 'cba'));


