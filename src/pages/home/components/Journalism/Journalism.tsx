/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:24
 * @LastEditTime: 2021-08-27 15:08:47
 * @LastEditors: yuyang
 */
import React, { useContext, createContext } from 'react';

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
    <div className="w-full">
      <h5 className="w-4/5 my-0 mx-auto text-2xl">
        <span className="w-1/6 h-2 block bg-primary" />
        {title}
      </h5>
      <Provider value={provideValue}>
        <div className="w-4/5 mt-2 mx-auto mb-0 flex">
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
  description: React.ReactNode;
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
    <div className="w-1/3 bg-transparent py-0 px-4">
      <div
        className={`w-full rounded flex box-border items-center py-0 bg-transparent cursor-pointer transition delay-75 ${isActive ? 'bg-primary' : 'bg-white'}`}
        onClick={handleClick}
      >
        <div className=" bg-custom-gray-2 flex-shrink-0 p-2">
          <p className="text-center text-2xl font-bold m-0">{day}</p>
          <p className="text-center text-xl font-bold m-0">
            {year}
            -
            {month}
          </p>
        </div>
        <div className={`h-56 p-2 ${isActive ? 'text-white' : ''} `} style={{ flex: 4 }}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Journalism;
