## use

```
npm install numable -S
```

```js
var numable = require("numable");
// or;
import numable from "numable";
// or;
<script src="numable/dist/index.umd.js"></script>;
```

## Create

```js
const nnn = numable(123456.123456);
```

## Format

[See the documentation for detailed formatting Settings](https://liuhaifengzzzzz.github.io/numable/example.html)

```js
const nnn = numable(123456.123456);
console.log(nnn.format("#,###"));
// console => 123,456

// format
// #,### => 123,456
// ￥#,#### => ￥12,3456
// $#,##0.000 => $123,456.000
// 00000#,###.000000 => 00000123,456.000000
// #.#% => 12.3%
// #.00% => 12.30%
// ...
```

## Settings

Default Formatting

```js
numable.defaultOptions({
  currentLocal: "zh-CN",
  zeroFormat: null,
  nullFormat: null,
  defaultFormat: "#,###"
});
```

## Local

Modify the default separator

```js
numable.register("local", "custom-local", {
  decimal: ".",
  delimiter: ","
});

numable.local("custom-local");
```

## Custom Format

### Example 1

```js
numable.register("format", "percent", {
  regexps: {
    format: /(%)/
  },
  format: function (value, pattern) {
    const scalePercentByValue = 100;

    return numable._.numberToFormat(value * scalePercentByValue, pattern);
  }
});
```

### Example 2

More Flexible formatting

```js
numable(123.456).format("#,###", 1, 2, 3, 4, 5);

numable.register("format", "Example", {
  regexps: {
    format: /(@)/
  },
  format: function (value, pattern, ...args) {
    console.log(value, pattern, args);
    // console => 123.456, #,###, 1 , 1, 2, 3, 4, 5
  }
});
```
