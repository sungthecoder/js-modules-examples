# js-modules-examples
Examples of JavaScript modules, module loaders, and bundlers.

RequireJS allows us to write AMD module definition, and dynamically load module dependancies.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>JS Modules</title>
  </head>
  <body>
    <h1>
      The Answer is
      <span id="answer"></span>
    </h1>

    <script data-main="main" src="require.js"></script>
  </body>
</html>
```
