class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
   )  {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
   }
  
}

type Transaction = {
   description: string,
   value: number,
   date: string
}


class TransactionType {
   private date: string;
   private value: number;
   private description: string;
   
   constructor(date: string, value: number, description: string) {
     this.date = date;
     this.value = value;
     this.description = description
   }
 }

class Bank {
   private accounts: UserAccount[];
 
   constructor(accounts: UserAccount[]) {
     this.accounts = accounts;
   }
 
} 