import './App.css'
import userData from "./userData";
import friends from './friends';
import transactions from './transactions';
import Profile from "../src/components/Profile/Profile";
import FriendList from "../src/components/FriendList/FriendList";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>

    
  );
}

export default App
