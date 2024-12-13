function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (isNaN(numB)) {
      throw new Error('Invalid input: b must be a number or a parsable string');
    }
    return a + numB;
  } else {
    return a + b;
  }
}

let result1 = addSafe(5, 10); // Works correctly
let result2 = addSafe(5, "10"); // Works correctly and converts string to number
let result3 = addSafe(5, "abc"); // Throws error, because it is not possible to parse as number

console.log(result1, result2); // Output: 15 15