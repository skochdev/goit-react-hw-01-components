import React from 'react';
import css from './Profile.module.css';

interface ProfileProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: Stats;
}

interface Stats {
  followers: number;
  views: number;
  likes: number;
}

export const Profile: React.FC<ProfileProps> = () => {
  return (
    <>
      <div className={css.profile}>
        <div className="description">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>Petra Marica</p>
          <p className={css.tag}>@pmarica</p>
          <p className={css.location}>Salvador, Brasil</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>1000</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>2000</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>3000</span>
          </li>
        </ul>
      </div>
    </>
  );
};
