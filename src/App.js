import Profile from './components/Profile/Profile';
import user from '../src/user.json';
import style from './App.module.css';

import Statistics from './components/Statistics/Statistics';
import statisticalData from '../src/statisticalData.json';

import FriendList from './components/FriendList/FriendList';
import friends from '../src/friends';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from '../src/transactions.json';

function App() {
  return (
      <div className={style.App}>
        <Profile
          name={user.name}
          tag={user.tag}
          location = {user.location}
          avatar = {user.avatar}
          stats={ user.stats }
            />

        <Statistics title="Upload stats" stats={statisticalData} />

        <FriendList 
        friends = {friends}
        />

        <TransactionHistory
          transactions={ transactions}
        />
      
      </div>
  );
}

export default App;
