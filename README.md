# Change Converter 

A simple challenge to showcase coding process and quality. 

A user can have a value broken down into most efficient level of change (£), or get a total from an array of change (£).

## To run 

1. Clone this repo.

2. Install dependencies with:

   ```shell
   npm install
   ```

3. Run tests with:

   ```shell
   npm test
   ```

4. Run the Node REP:

   ```js
   node
   ```

5. Require `change_generator.js`:

   ```js
   const ChangeGenerator = require("./src/change_generator.js")
   ```

6. Create an account with:

   ```js
   let changeGenerator = new ChangeGenerator();
   ```

7. Use the account with the following methods:

| Function                     | Description                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| `changeGenerator.convert(number)`  | Converts any integer into the most efficient array of change in British Pounds.  |
| `changeGenerator.total(arrayOfChange)` | Totals an array of change (British Pounds) eg. ['£10', '£5', '5p', '20p']. |

## Acceptance Criteria

```
change_generator.convert(7.42)
 => ["£5", "£1", "£1", "20p", "20p", "2p"]
change_generator.convert(40)
 => ["£20", "£20"]
change_generator.convert(16.30)
 => ["£10", "£5", "£1", "20p", "10p"]
change_generator.convert(19.99)
 => ["£10", "£5", "£1", "£1", "1", "£1", "50p", "20p", "20p", "5p", "2p", "2p"]
change_generator.convert(76.81)
 => ["£50", "£20", "£5", "£1", "50p", "20p", "10p", "1p"]
```

## Extension Options

- Write a program that takes an array of note and coin values and returns the result of summing these amounts, in `£00.00` format.