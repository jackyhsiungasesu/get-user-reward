import { useState } from 'react';

import Table from './components/Table';
import './App.css';
import { mockFetch } from './utils/mockAPIs';

function App() {
  const [ rewards, setRewards ] = useState([]);
  const [ users, setUsers ] = useState([]);

  const onButtonClick = async () => {
    try {
      const customers = await mockFetch('/customers', 'GET');
      const customerIDs = customers.map(customer => customer.customer_id);
      const { rewards } = await mockFetch('/rewards', 'POST', customerIDs);
      
      setUsers(customers.reduce((acc, customer) => {
        acc[customer.customer_id] = customer.name; 
        return acc;
      }, {}));
      setRewards(rewards);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <button className='get-reward-button' onClick={onButtonClick}>Get User Rewards</button>
      <Table users={users} rewards={rewards} />
    </div>
  );
}

export default App;
