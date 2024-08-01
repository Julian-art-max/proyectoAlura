document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    if (validateInput(inputText)) {
        let encryptedText = encryptText(inputText);
        document.getElementById('outputText').innerText = encryptedText;
    }
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    if (validateInput(inputText)) {
        let decryptedText = decryptText(inputText);
        document.getElementById('outputText').innerText = decryptedText;
    }
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function validateInput(text) {
    const invalidChars = /[^a-z\s]/;
    if (invalidChars.test(text)) {
        showAlert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
        return false;
    }
    return true;
}

function showAlert(message) {
    let alertContainer = document.getElementById('alertContainer');
    let alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message;
    alertContainer.style.display = 'block';
}

document.getElementById('closeAlertBtn').addEventListener('click', function() {
    let alertContainer = document.getElementById('alertContainer');
    alertContainer.style.display = 'none';
});

document.getElementById('inputText').addEventListener('input', function() {
    let outputText = document.getElementById('outputText');
    if (this.value === '') {
        outputText.innerText = 'Ningún mensaje fue encontrado';
    }
});
