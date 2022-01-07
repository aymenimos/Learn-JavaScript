# Learn-JavaScript

## What happens when javascript executes (runs) my code?

```javascript
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const name = "Will";
```

As soon as we start running our code, we create a `global execution context`

- Thread of execution (parsing and executing the code line after line) - Live memory of variables with data (known as a Global Variable Environment)
  a
