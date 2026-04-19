function speak(word){
  const msg = new SpeechSynthesisUtterance(word);
  msg.rate = 1;
  msg.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(msg);
}

function say(word){
  speak(word);
}

function go(word, page){
  speak(word);
  setTimeout(() => {
    window.location.href = page;
  }, 300);
}

function goHome(){
  window.location.href = "index.html";
}
