/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  maxDeposit: 400000,
  hasBlocked: false,
  transactions: [],  
  
  /**
   *  {
   *    id: string,
   *    amount: number,
   *    type: "deposit" | "withdraw"
   *  }
   */

  createTransaction(amount, type) {
    return {
      id: (this.transactions.length + 1).toString(),
      amount, 
      type,
    };
  },

  deposit(amount) {
    if (amount > this.maxDeposit) {
      hasBlocked = true;
      console.error("Were did you get this money!!!");
      return;
    }

    this.balance += amount;

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT); 

    this.transactions.push(newTransaction);
  },
  
  withdraw(amount) {
    if (amount > this.balance) {
      console.error("You don't have enough money");
      return;
    }

    this.balance -= amount;

    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    
    this.transactions.push(newTransaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) return transaction;
    }


    console.warn("You don't have transaction with id: " + id);
  },


  getTransactionTotal(type) {
    let totalAmount = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) totalAmount += transaction.amount;
    }

    return totalAmount;
  }
}

account.deposit(1000);

console.log(account.getBalance());

account.withdraw(750);

console.log(account.getBalance());

account.withdraw(750);

account.deposit(500);
account.deposit(20000);

account.withdraw(750);

account.withdraw(750);


console.log(account.getTransactionDetails("1"));
console.log(account.getTransactionDetails("3"));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
