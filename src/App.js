import Profile from './components/Profile/Profile';
import user from '../src/user.json';
import style from './App.module.css';

import Statistics from './components/Statistics/Statistics';
import stats from '../src/statisticalData.json';

import FriendList from './components/FriendList/FriendList';
import friends from '../src/friends';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from '../src/transactions.json';

function App() {
  return (
      <div className={style.App}>
        <>
            <Profile 
            avatar = {user.avatar}
            name = {user.name}
            tag = {user.tag}
            location = {user.location}
            followers = {user.stats.followers}
            views = {user.stats.views}
            likes = {user.stats.likes}
            />
        </>

        <>
        <Statistics
            stats = {stats}
          />
        </>

        <>
        <FriendList 
        friends = {friends}
        />
      </>
      
      <>
        <TransactionHistory
          transactions={ transactions}
        />
      </>
      </div>
  );
}

export default App;
