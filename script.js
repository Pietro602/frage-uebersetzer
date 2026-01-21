
function translate() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("outputText");

  if (input.trim() === "") {
    output.textContent = "Bitte gib eine Frage ein.";
    return;
  }

  // Mini-Demo-Wörterbuch
  const dictionary = {
    "wie geht es dir": "how are you",
    "was ist dein name": "what is your name",
    "wo wohnst du": "where do you live"
  };

  const key = input.toLowerCase();

  if (dictionary[key]) {
    output.textContent = dictionary[key];
  } else {
    output.textContent = "Keine Übersetzung gefunden (Demo).";
  }
}

