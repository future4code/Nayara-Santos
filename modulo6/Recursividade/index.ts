const printNumbers = (n: number) => {
    if (n >= 0) {
      printNumbers(n - 1);
      console.log(n);
    }
};

  const printNumbers2 = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbers(n - 1);
    }
};

export const calculateSumTo = (n: number, acc: number = 0): number => {
    if (n === 0) {
      return acc;
    }
    return calculateSumTo(n - 1, acc + n);
  };
  
  
  // Exemplos de uso:
  console.log(calculateSumTo(3));
  console.log(calculateSumTo(10));
  console.log(calculateSumTo(100));

  export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  // Exemplo de uso:
  const array = [1, 2, 3, 4];
  printArray(array);

