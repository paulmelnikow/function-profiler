function-profiler
=================

Profile a function. Print the elapsed time to the console.

Uses [`performance.now()`][performance.now] and currently works only in the
browser, though I'm open to making this isomorphic.

[performance.now]: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now


Motivation
----------

I created this because I wanted to do something simple. The other packages I
found were either much more complicated, or only worked in Node.


Usage
-----

```js
const profile = require('function-profiler');

const parsed = profile(yaml.safeLoad, 'Parsing yaml')(yamlStr);
```

```js
const profile = require('function-profiler');

class Parser {
  parse (yamlStr) {
    return yaml.safeLoad(yamlStr);
  }
}

Parser.prototype.parse = profile(Parser.prototype.parse, 'Parsing YAML');
```


Installation
------------

```
npm install --save function-profiler
```


Contribute
----------

- Issue Tracker: https://github.com/paulmelnikow/function-profiler/issues
- Source Code: https://github.com/paulmelnikowfunction-profiler/

Pull requests welcome!


Support
-------

If you are having issues, please let me know.


License
-------

The project is licensed under the MIT license.
