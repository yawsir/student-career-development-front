/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:24
 * @LastEditTime: 2021-07-07 09:45:23
 * @LastEditors: yuyang
 */
import React, { useContext, createContext } from 'react';
import styles from './index.less';

interface JournalismProps {
  activeKey?: string;
  onClick?: (name: string) => void;
  defaultActive: string;
  title?: string;
}

interface ContextType {
  activeKey: string;
  onClick?: (name: string, reactChildren: React.ReactNode) => void;
  renderDefault: (name: string, reactChildren: React.ReactNode) => void;
}

const descriptionContext = createContext<ContextType>({
  activeKey: '',
  onClick: () => {},
  renderDefault: () => {},
});

const Journalism: React.FC<JournalismProps> = (props) => {
  const { children, activeKey = '', defaultActive, title = '', onClick } = props;
  const [content, setContent] = React.useState<React.ReactNode>();
  const { Provider } = descriptionContext;

  const handleClick = (name: string, reactChildren: React.ReactNode) => {
    onClick?.(name);
    setContent(reactChildren);
  };

  const renderDefault = (name: string, reactChildren: React.ReactNode) => {
    if (name === defaultActive) {
      setContent(reactChildren);
    }
  };

  const provideValue = {
    activeKey,
    onClick: handleClick,
    renderDefault,
  };
  return (
    <div className={styles.journalism}>
      <h5 className={styles.journalism__title}>
        <span className={styles.journalism__title__deco} />
        {title}
      </h5>
      <Provider value={provideValue}>
        <div className={styles['home__journalism__description-wrap']}>
          {children}
        </div>
        {content}
      </Provider>
    </div>
  );
};

interface DescriptionProps {
  date: string;
  name: string;
  description: string;
}

export const Description: React.FC<DescriptionProps> = (props) => {
  const {
    activeKey,
    onClick,
    renderDefault,
  } = useContext(descriptionContext);
  const { date, children, name, description } = props;
  const isActive = activeKey === name;
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');

  React.useEffect(() => {
    renderDefault(name, children);
  }, []); // 为了初始展示;

  const handleClick = () => {
    onClick?.(name, children);
  };

  return (
    <>
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
          {description}
        </div>
      </div>
    </>
  );
};

export default Journalism;
