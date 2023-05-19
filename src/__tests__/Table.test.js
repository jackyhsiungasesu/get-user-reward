import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import Table from "../components/Table";
import { CUSTOMERS } from "../constants/mockData";

afterEach(() => {
  cleanup();
})

describe("Table component" ,() => {
  test("Rendering table given users and rewards", () => {
    const users = CUSTOMERS.reduce((acc, customer) => {
      acc[customer.customer_id] = customer.name; 
      return acc;
    }, {});
  
    const rewards = [
      {
        "customer_id": "001",
        "monthly_reward_points": {
          "January": 75,
          "February": 90,
          "March": 285
        }
      },
      {
        "customer_id": "002",
        "monthly_reward_points": {
          "January": 150,
          "February": 120,
          "March": 60
        }
      },
      {
        "customer_id": "003",
        "monthly_reward_points": {
          "January": 30,
          "February": 60,
          "March": 90
        }
      }
    ];

    const { container, getByText } = render(<Table users={users} rewards={rewards}/>);
    const table = container.querySelector('table');
    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(rewards.length + 1);

    expect(getByText('January')).toBeInTheDocument();
    expect(getByText('John Wick')).toBeInTheDocument();
  })

  test('return null if users or rewards are not provided', () => {
    // Render the component without the prop
    const { container } = render(<Table users={[]} rewards={[]}/>);

    // Assert that the rendered output is null
    expect(container.firstChild).toBeNull();
  })
})
