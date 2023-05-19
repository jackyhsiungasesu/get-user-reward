const { TRANSACTIONS, CUSTOMERS } = require('../constants/mockData')

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

/**
 * Calculate the points given dollars spent
 *
 * @param {number} amount - Dollars spent in a transaction
 * @returns {number} points awarded in this transaction
 */
function getRewardPerTransaction(amount) {
  if (amount > 100) {
    return 2 * (amount - 100) + 1 * 50
  } else if (50 <= amount && amount <= 100) {
    return 1 * (amount - 50)
  } else {
    return 0;
  }
}

/**
 * Get the points for each month given the users and transactions
 *
 * @param {string} customerID - customer id 
 * @param {object} transactions - an array of transactions of each customer
 * @returns {object} points awarded per month
 */
function getCustomerRewardPerMonth(customerID, transactions) {
  const customerTransaction = transactions.find(elem => elem.customer_id === customerID)?.transactions;
  const customerTransactionPerMonth = customerTransaction.reduce((acc, transaction) => {
    const month = MONTH_NAMES[new Date(transaction.date).getMonth()];
    if (!acc.hasOwnProperty(month)) {
      acc[month] = 0;
    }
    const reward = getRewardPerTransaction(parseInt(transaction.amount));
    acc[month] += reward;
    return acc;
  }, {});

  return customerTransactionPerMonth;
}

/**
 * Get the points for each month given the users and transactions
 *
 * @param {string} customerList - an array of customer ids 
 * @returns {Promise} promise resolved to an array of users and their points
 */
function getRewards(customerList) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rewards = customerList.map((customerID) => {
        return {
          customer_id: customerID,
          monthly_reward_points: getCustomerRewardPerMonth(customerID, TRANSACTIONS)
        }
      })
      resolve({ rewards });
    }, 200);
  });
}

/**
 * Get the users
 *
 * @returns {Promise} promise resolved to an array of users
 */
function getCustomers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CUSTOMERS)
    }, 200);
  });
}

module.exports = {
  getRewardPerTransaction,
  getCustomerRewardPerMonth,
  getRewards,
  getCustomers
}