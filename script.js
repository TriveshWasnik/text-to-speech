/*
SpeechSynthesisUtterance
=========================
SpeechSynthesisUtterance is a JavaScript object that represents a speech request in the Web Speech API. This API allows web developers to incorporate speech synthesis (text-to-speech) into their web applications.
*/
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

speechSynthesis.onvoiceschanged = function () {
  voices = speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", function () {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", function () {
  speech.text = document.querySelector("textarea").value;
  speechSynthesis.speak(speech);
});

/*
// Create a new SpeechSynthesisUtterance object
var utterance = new SpeechSynthesisUtterance();

// Set the text that you want to be spoken
utterance.text = "Hello, how are you today?";

// Optionally, you can set other properties like the voice, pitch, rate, etc.
utterance.volume = 1; // Volume level (0.0 to 1.0)
utterance.pitch = 1;  // Pitch level (0.1 to 2.0)
utterance.rate = 1;   // Speaking rate (0.1 to 10.0)

// Get the speech synthesis voices available on the user's device
var voices = window.speechSynthesis.getVoices();

// Set a specific voice if desired (you can loop through the available voices)
utterance.voice = voices[0];

// Speak the text
window.speechSynthesis.speak(utterance);
 */
