/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:24
 * @LastEditTime: 2021-08-29 17:48:36
 * @LastEditors: yuyang
 */
import React, { createContext } from 'react';

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

export const descriptionContext = createContext<ContextType>({
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
        <div className="flex flex-wrap items-center">
          <div className="w-1/3 lg:w-4/5 box-border mt-2 mx-auto mb-0 flex flex-wrap">
            {children}
          </div>
          <div className="w-2/3 lg:w-full box-border">
            {content}
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default Journalism;
