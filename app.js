function speak(word){
  const msg = new SpeechSynthesisUtterance(word);
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(msg);
}

// ONLY SPEAK
function say(word){
  speak(word);
}

// SPEAK + GO
function go(word, page){
  speak(word);
  setTimeout(() => {
    window.location.href = page;
  }, 300);
}

function goHome(){
  window.location.href = "index.html";
}
