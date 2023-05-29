function encrypt() {
  var word = document.getElementById("word").value;
  var result = "";

  for (var i = 0; i < word.length; i++) {
      var charCode = word.charCodeAt(i);
      result += String.fromCharCode(charCode - 1);
  }

  document.getElementById("result").value = result;

  // Mostrar imagen y mensaje de encriptación
  document.getElementById("encryption-image").style.display = "block";
  document.getElementById("encryption-message").style.display = "block";

  // Ocultar imagen y mensaje de desencriptación
  document.getElementById("decryption-image").style.display = "none";
  document.getElementById("decryption-message").style.display = "none";
}

function decrypt() {
  var word = document.getElementById("result").value;
  var result = "";

  for (var i = 0; i < word.length; i++) {
      var charCode = word.charCodeAt(i);
      result += String.fromCharCode(charCode + 1);
  }

  document.getElementById("result").value = result;

  // Mostrar imagen y mensaje de desencriptación
  document.getElementById("decryption-image").style.display = "block";
  document.getElementById("decryption-message").style.display = "block";

  // Ocultar imagen y mensaje de encriptación
  document.getElementById("encryption-image").style.display = "none";
  document.getElementById("encryption-message").style.display = "none";
}

function copyResult() {
  var result = document.getElementById("result").value;

  navigator.clipboard.writeText(result)
    .then(function() {
      alert("Resultado copiado al portapapeles: " + result);
    })
    .catch(function(error) {
      alert("Error al copiar el resultado al portapapeles.");
    });
}

function clearPlaceholder() {
  var wordInput = document.getElementById("word");
  wordInput.placeholder = "";
}

function restorePlaceholder() {
  var wordInput = document.getElementById("word");
  if (wordInput.value === "") {
    wordInput.placeholder = "Pulse aquí para escribir su palabra";
  }
}
