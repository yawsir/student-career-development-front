/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:49:24
 * @LastEditTime: 2021-10-13 13:24:45
 * @LastEditors: yuyang
 */
import React, { createContext, useState } from 'react';

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
  const [content, setContent] = useState<React.ReactNode>();
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
      <h5 className="inline-block my-0 mx-auto text-3xl">
        <span className="h-2 block bg-gradient-to-r from-bg-1 to-bg-2" />
        {title}
      </h5>
      <Provider value={provideValue}>
        <div className="flex flex-wrap items-start">
          <div className="w-1/3 box-border mt-2 mx-auto mb-0 flex flex-wrap">
            {children}
          </div>
          <div className="w-2/3 box-border">
            {content}
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default Journalism;
