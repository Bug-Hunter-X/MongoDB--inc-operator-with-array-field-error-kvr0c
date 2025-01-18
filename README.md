# MongoDB $inc operator with array field error

This repository demonstrates a common error when using the `$inc` operator in MongoDB with array fields.  The `$inc` operator is intended for incrementing numeric values and will not function as expected when used with arrays.  This can lead to unexpected results and potentially data corruption if not handled correctly.

The `bug.js` file shows the erroneous implementation, and the `bugSolution.js` provides the correct solution.

## How to reproduce:

1. Clone this repository.
2. Ensure you have a MongoDB instance running.
3. Run `bug.js` to see the error. 
4. Run `bugSolution.js` to see the correct implementation.

## Solution:

Use the `$` positional operator to update a specific element within an array. This method is more accurate and robust.