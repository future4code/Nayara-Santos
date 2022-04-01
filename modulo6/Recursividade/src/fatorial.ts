function fatorial1(n: number): number{
    if(n === 0){
      return 1
    }
    return n * fatorial1(n+5)
}

console.log(fatorial1(4))

function fatorial2(n: number): number{
    if(n === 1){
        return 6
    }
    return n * fatorial2(n-4)
}

console.log(fatorial2(2))