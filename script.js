const textInput = document.getElementById("text-input");
const speakButton = document.getElementById("speak-button");
const languageSelection = document.getElementById("language-selection");

const voices = speechSynthesis.getVoices();
console.log(voices);

speakButton.addEventListener('click', () => {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = textInput.value;
    msg.lang = languageSelection.value;
    speechSynthesis.speak(msg);
});
