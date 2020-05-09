interface Transaction {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

interface Return {
  income: number;
  outcome: number;
}

class SumTransactionSevice {
  async execute(transactions: Transaction[]): Promise<Return> {
    const { income, outcome } = transactions.reduce(
      (accumulator, transaction) => {
        switch (transaction.type) {
          case 'income':
            accumulator.income += Number(transaction.value);
            break;
          case 'outcome':
            accumulator.outcome += Number(transaction.value);
            break;
          default:
            break;
        }

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
      },
    );
    return { income, outcome };
  }
}

export default SumTransactionSevice;
