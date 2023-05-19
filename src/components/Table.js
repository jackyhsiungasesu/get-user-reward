import React from "react";

import '../styles/Table.css';

function Table({ users, rewards }) {
  if (users.length === 0 || rewards.length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>User Name</th>
          {Object.keys(rewards[0].monthly_reward_points).map(month => <th key={month}>{month}</th>)}
        </tr>
        
      </thead>
      <tbody>
        {rewards.map(elem => {
          return (
            <tr key={elem.customer_id}>
              <td>{users[elem.customer_id]}</td>
              {Object.entries(elem.monthly_reward_points).map(([key, value]) => <td key={key}>{value}</td>)}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;