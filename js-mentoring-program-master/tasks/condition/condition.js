//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
{
  const a = 3,
        b = 2;

(a + b < 4)
  ? console.log('wrong')
  : console.log('too much');
}

/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */
{
    const x = 3;
    const y = 7;
    let z= 0;

// Task 1
    if (x >=10 && y >=10 ) {
      z = x * y;
    } else {
      z = x + y;  
 }
 
 //Task 2
 (x >=10 && y >=10 )
  ? z = x * y
  : z = x + y;
}

/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */

{
    const x = 3;
    const y = 7;
    const operator = "add";

    if (operator === "add") {
      z = x + y
    } else if (operator === "subtract") {
      z = x - y
    } else if (operator === "multiply") {
      z = x * y
    } else if (operator === "divide") {
      z = x / y
    };
}
