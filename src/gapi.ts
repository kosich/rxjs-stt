// Global API

const _SpeechRecognition: typeof SpeechRecognition = window.SpeechRecognition || window['webkitSpeechRecognition'];
const _SpeechGrammarList: typeof SpeechGrammarList = window.SpeechGrammarList || window['webkitSpeechGrammarList'];
const _SpeechRecognitionEvent: typeof SpeechRecognitionEvent = window.SpeechRecognitionEvent || window['webkitSpeechRecognitionEvent'];

export {
  _SpeechRecognition as SpeechRecognition,
  _SpeechGrammarList as SpeechGrammarList,
  _SpeechRecognitionEvent as SpeechRecognitionEvent
};