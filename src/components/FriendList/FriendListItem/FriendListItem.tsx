import React from 'react';
import css from './FriendListItem.module.css';

interface FriendListItemProps {
  friend: {
    name: string;
    avatar: string;
    isOnline: boolean;
    id: number;
  };
}

export const FriendListItem: React.FC<FriendListItemProps> = ({ friend }) => {
  return (
    <>
      <span className={friend.isOnline ? `${css.online}` : `${css.offline}`}></span>
      <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
      <p className="name">{friend.name}</p>
    </>
  );
};
