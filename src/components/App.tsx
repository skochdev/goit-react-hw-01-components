import React from 'react';
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from 'user.json';
import data from '../statistics.json';
import friends from '../friends.json';
import transactions from 'transactions.json';

export const App: React.FC = () => {
  return (
    <div>
      <Profile
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
