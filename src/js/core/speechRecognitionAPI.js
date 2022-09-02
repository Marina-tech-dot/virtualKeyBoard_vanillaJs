let recognizing;
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.continuous = true;
reset();
recognition.onend = () => {
  console.log('!', JSON.parse(localStorage['keyBoard-state']).Microphone)
}

recognition.onresult = function (event) {
  const el = document.querySelector('#written')
  for (let i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      el.value += event.results[i][0].transcript;
    }
  }
}

function reset() {
  recognizing = false;
}

export function toggleStartStop() {
  if (recognizing) {
    recognition.stop();
    reset();
  } else {
    recognition.start();
    recognizing = true;
  }
}