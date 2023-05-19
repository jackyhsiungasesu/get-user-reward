const TRANSACTIONS = [
  {
    "customer_id": "001",
    "transactions": [
      {
        "date": "2023-01-05",
        "amount": 100.0
      },
      {
        "date": "2023-01-18",
        "amount": 75.5
      },
      {
        "date": "2023-02-10",
        "amount": 50.0
      },
      {
        "date": "2023-02-15",
        "amount": 120.25
      },
      {
        "date": "2023-03-02",
        "amount": 200.0
      },
      {
        "date": "2023-03-18",
        "amount": 85.75
      }
    ]
  },
  {
    "customer_id": "002",
    "transactions": [
      {
        "date": "2023-01-03",
        "amount": 150.0
      },
      {
        "date": "2023-01-14",
        "amount": 50.0
      },
      {
        "date": "2023-02-07",
        "amount": 80.0
      },
      {
        "date": "2023-02-25",
        "amount": 120.0
      },
      {
        "date": "2023-03-05",
        "amount": 90.0
      },
      {
        "date": "2023-03-22",
        "amount": 70.0
      }
    ]
  },
  {
    "customer_id": "003",
    "transactions": [
      {
        "date": "2023-01-08",
        "amount": 80.0
      },
      {
        "date": "2023-01-21",
        "amount": 40.0
      },
      {
        "transaction_id": "tx015",
        "date": "2023-02-14",
        "amount": 60.0
      },
      {
        "date": "2023-02-27",
        "amount": 100.0
      },
      {
        "date": "2023-03-10",
        "amount": 120.0
      },
      {
        "date": "2023-03-29",
        "amount": 50.0
      }
    ]
  }
];

const CUSTOMERS = [
  {
    "customer_id": "001",
    "name": 'John Wick'
  },
  {
    "customer_id": "002",
    "name": 'Harry Potter'
  },
  {
    "customer_id": "003",
    "name": 'Gandolf'
  }
]

module.exports = {
  TRANSACTIONS,
  CUSTOMERS
};
