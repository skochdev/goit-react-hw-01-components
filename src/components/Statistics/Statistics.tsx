import React from 'react';
import css from './Statistics.module.css';

interface Stats {
  id: string;
  label: string;
  percentage: number;
}

interface StatisticProps {
  title?: string;
  stats: Stats[];
}

export const Statistic: React.FC<StatisticProps> = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {stats.map(entry => {
            return (
              <li className={css.item} key={entry.id}>
                <span className={css.label}>{entry.label}</span>
                <span className={css.percentage}>{entry.percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
