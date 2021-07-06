/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:24
 * @LastEditTime: 2021-07-06 17:51:00
 * @LastEditors: yuyang
 */
import React, { useContext, createContext } from 'react';
import styles from './index.less';

interface DescriptionsProps {
  activeKey?: string;
  onClick?: (name: string) => void;
}

interface ContextType {
  activeKey: string;
  onClick?: (name: string) => void;
}

const descriptionContext = createContext<ContextType>({
  activeKey: '',
  onClick: () => {},
});

const Descriptions: React.FC<DescriptionsProps> = (props) => {
  const { children, activeKey = '', onClick } = props;
  const { Provider } = descriptionContext;
  const provideValue = {
    activeKey,
    onClick,
  };
  return (
    <Provider value={provideValue}>
      {children}
    </Provider>
  );
};

interface DescriptionItemProps {
  date: string;
  name: string;
}

export const DescriptionItem: React.FC<DescriptionItemProps> = (props) => {
  const {
    activeKey,
    onClick,
  } = useContext(descriptionContext);
  const { date, children, name } = props;
  const isActive = activeKey === name;
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');

  const handleClick = () => {
    onClick?.(name);
  };

  return (
    <div
      className={`${styles.journalism__description} ${isActive ? styles['journalism__description--active'] : ''}`}
      onClick={handleClick}
    >
      <div className={styles.journalism__description__date}>
        <p className={styles.journalism__description__date__day}>{day}</p>
        <p className={styles.journalism__description__date__year}>
          {year}
          -
          {month}
        </p>
      </div>
      <div className={styles.journalism__description__text}>
        {children}
      </div>
    </div>
  );
};

export default Descriptions;
