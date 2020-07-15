# RxJS wrapper for speech recognition Web API

```
npm i rxjs-tts
```

Try it online: https://stackblitz.com/edit/rxjs-stt?file=index.ts

## About

This is a RxJS wrapper around browser native [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition).

## Usage

```js
import { listen } from 'rxjs-stt';

listen({ lang: 'en' }).subscribe(e => {
    if (e.type == 'result') {
        console.log(e.results[0][0].transcript);
    }
});
```