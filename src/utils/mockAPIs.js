const { TRANSACTIONS, CUSTOMERS } = require('../constants/mockData')

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

function rewardPerTransaction(amount) {
  if (amount > 100) {
    return 2 * (amount - 100) + 1 * 50
  } else if (50 <= amount && amount <= 100) {
    return 1 * (amount - 50)
  } else {
    return 0;
  }
}

function calculateCustomerRewardPerMonth(customerID, transactions) {
  const customerTransaction = transactions.find(elem => elem.customer_id === customerID)?.transactions;
  const customerTransactionPerMonth = customerTransaction.reduce((acc, transaction) => {
    const month = MONTH_NAMES[new Date(transaction.date).getMonth()];
    if (!acc.hasOwnProperty(month)) {
      acc[month] = 0;
    }
    const reward = rewardPerTransaction(parseInt(transaction.amount));
    acc[month] += reward;
    return acc;
  }, {});

  return customerTransactionPerMonth;
}

function getRewards(customerList) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rewards = customerList.map((customerID) => {
        return {
          customer_id: customerID,
          monthly_reward_points: calculateCustomerRewardPerMonth(customerID, TRANSACTIONS)
        }
      })
      resolve({ rewards });
    }, 200);
  });
}

function getCustomers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CUSTOMERS)
    }, 200);
  });
}

module.exports = {
  getRewards,
  getCustomers
}