<div align="center">
  <h1>
    <br/>
    👂
    <br/>
    <sub><sub>Web API Speech recognition with RxJS</sub></sub>
    <br/>
    <br/>
    <a href="https://www.npmjs.com/package/rxjs-stt"><img src="https://img.shields.io/npm/v/rxjs-stt" alt="NPM"></a>
    <a href="https://bundlephobia.com/result?p=rxjs-stt@latest"><img src="https://img.shields.io/bundlephobia/minzip/rxjs-stt?label=gzipped" alt="Bundlephobia"></a>
    <a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/npm/l/rxjs-stt" alt="MIT license"></a>
    <br/>
    <br/>
    <br/>
  </h1>
</div>

A RxJS wrapper around browser native [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

## Install

```
npm i rxjs-stt
```

Try it [**online**](https://stackblitz.com/edit/rxjs-stt?file=index.ts)


## Use

```js
import { listen } from 'rxjs-stt';

listen({ lang: 'en' }).subscribe(e => {
    if (e.type == 'result') {
        console.log(e.results[0][0].transcript);
    }
});
```

