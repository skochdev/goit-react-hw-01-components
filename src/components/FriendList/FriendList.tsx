import React from 'react';
import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

interface FriendListProps {
  friends: { id: number; name: string; avatar: string; isOnline: boolean }[];
}

export const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};
