function caesarCipher(str, shift) {

    if (shift < 0) {
        return caesarCipher(str, shift + 26);
    }

    let output = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char.match(/[a-z]/i)) {
            const code = str.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        output += char;
    }

    return output;
}

function encrypt() {
    const text = document.getElementById('textInput').value;
    const key = parseInt(document.getElementById('shiftKey').value) || 0;
    const result = caesarCipher(text, key);
    document.getElementById('resultOutput').textContent = result;
}

function decrypt() {
    const text = document.getElementById('textInput').value;
    const key = parseInt(document.getElementById('shiftKey').value) || 0;
    const result = caesarCipher(text, (26 - (key % 26)));
    document.getElementById('resultOutput').textContent = result;
}