function reset() {
  document.getElementById("userInput").value = "";
  document.getElementById("translation").value = "";
}

function tryIt() {
  var tryIt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
  "Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem." +
  "Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam." +
  "Quisque semper justo at risus.";
  document.getElementById("userInput").value = tryIt;
}

function leetSpeak() {
  var input = document.getElementById("userInput").value;
  var translation = input.replace(/a/g,"4").replace(/b/g,"8").replace(/e/g,"3").replace(/g/g,"6").replace(/o/g,"0").replace(/s/g,"5").replace(/t/g,"7").replace(/z/g,"2");
  document.getElementById("translation").value = translation;
}

function upperCase() {
  var input = document.getElementById("userInput").value;
  var toUpperCase = input.toUpperCase();
  document.getElementById("translation").value = toUpperCase;
}

function morseCode() {
  var input = document.getElementById("userInput").value;
  var toMorseCode = input.toLowerCase().replace(/a/g,"| • — ").replace(/b/g,"| — • • • ").replace(/c/g,"| — • — • ").replace(/d/g,"| — • • ").replace(/e/g,"| • ")
  .replace(/f/g,"| • • — • ").replace(/g/g,"| — — • ").replace(/h/g,"| • • • • ").replace(/i/g,"| • • ").replace(/j/g,"| • —— —— ——").replace(/k/g,"| — • — ").replace(/l/g,"| • — • • ")
  .replace(/m/g,"| — — ").replace(/n/g,"| — • ").replace(/o/g,"| — — — ").replace(/p/g,"| • — — • ").replace(/q/g,"| — — • — ").replace(/r/g,"| • — • ").replace(/s/g,"| • • • ")
  .replace(/t/g,"| — ").replace(/u/g,"| • • — ").replace(/v/g,"| • • • —").replace(/w/g,"| • — — ").replace(/x/g,"| — • • — ").replace(/y/g,"| — • — — ").replace(/z/g,"| — — • • ")
  .replace(/ą/g,"| • — • — ").replace(/ć/g,"| — • — • • ").replace(/ę/g,"| • • — • • ").replace(/ch/g,"| — — — — ").replace(/ł/g,"| • — • • — ")
  .replace(/ń/g,"| — — • — — ").replace(/ó/g,"| — — — • ").replace(/ś/g,"| • • • — • • • ").replace(/ż/g,"| — — • • — • ").replace(/ź/g,"| — — • • — ")
  .replace(/,|\./g,"");
  document.getElementById("translation").value = toMorseCode + "|";
}
