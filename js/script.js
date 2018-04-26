
function leetSpeakTranslator() {
  var input = document.getElementById("userInput").value;
  var translation = input.replace(/a/g,"4").replace(/b/g,"8").replace(/e/g,"3").replace(/g/g,"6").replace(/o/g,"0").replace(/s/g,"5").replace(/t/g,"7").replace(/z/g,"2");
  document.getElementById("translation").value = translation;
}

function reset() {
  document.getElementById("userInput").value = "";
  document.getElementById("translation").value = "";
}

function tryIt() {
  var tryIt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.";
  document.getElementById("userInput").value = tryIt;

}
