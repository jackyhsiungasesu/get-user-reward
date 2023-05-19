const { getRewardPerTransaction, getCustomers, getCustomerRewardPerMonth } = require('../utils/mockAPIs');
const { TRANSACTIONS, CUSTOMERS } = require('../constants/mockData');

describe('Calculating reward points given transaction', () => {
  test('120 dollars get 90 points', () => {
    expect(getRewardPerTransaction(120)).toBe(90);
  });

  test('60 dollars get 10 points', () => {
    expect(getRewardPerTransaction(60)).toBe(10);
  });

  test('20 dollars get 0 points', () => {
    expect(getRewardPerTransaction(20)).toBe(0);
  });
})

describe('Get users info', () => {
  test('get a list of users', () => {
    getCustomers().then(data => {
      expect(data).toBe(CUSTOMERS);
    })
  });
})

describe('Get rewards per month given user', () => {
  test('get points per month for the first user', () => {
    const userID = '001';
    const results = {
      "January": 75,
      "February": 90,
      "March": 285
    };

    expect(getCustomerRewardPerMonth(userID, TRANSACTIONS)).toEqual(results);
  })
})
