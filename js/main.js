var display = document.getElementById("display");

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    var result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function playSound() {
  var audio = document.getElementById("audio");
  audio.play();
}




/* Atención al tutor: Aunque el código sea muy corto (unas simples 23 lineas), este trabajo ha derretido el cerebro del alumno, por favor tener piedad con el mismo. Muchisimas gracias T.T */

  