document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const shiftInput = document.getElementById('shiftInput');
    const resultOutput = document.getElementById('resultOutput');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');

    function caesarCipher(text, shift, isDecrypt = false) {
        if (isDecrypt) {
            shift = -shift;
        }

        return text.split('').map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt(0);

                const base = (code >= 65 && code <= 90) ? 65 : 97;

                return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
            }

            return char;
        }).join('');
    }

    encryptBtn.addEventListener('click', () => {
        const text = textInput.value;
        const shift = parseInt(shiftInput.value) || 0;
        const encrypted = caesarCipher(text, shift, false);
        resultOutput.innerText = encrypted;
    });

    decryptBtn.addEventListener('click', () => {
        const text = textInput.value;
        const shift = parseInt(shiftInput.value) || 0;
        const decrypted = caesarCipher(text, shift, true);
        resultOutput.innerText = decrypted;
    });
});