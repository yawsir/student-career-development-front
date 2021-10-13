/*
 * @Author: yuyang
 * @Date: 2021-10-13 16:29:15
 * @LastEditTime: 2021-10-13 17:53:47
 * @LastEditors: yuyang
 */
import React from 'react';
import circleRed from '@/assets/icons/platform-event/circle_red.svg';
import circleBlue from '@/assets/icons/platform-event/circle_blue.svg';
import circleGreen from '@/assets/icons/platform-event/circle_green.svg';
import circlePink from '@/assets/icons/platform-event/circle_pink.svg';
import circlePurple from '@/assets/icons/platform-event/circle_purple.svg';
import popRed from '@/assets/icons/platform-event/pop_red.svg';
import popBlue from '@/assets/icons/platform-event/pop_blue.svg';
import popGreen from '@/assets/icons/platform-event/pop_green.svg';
import popPink from '@/assets/icons/platform-event/pop_pink.svg';
import popPurple from '@/assets/icons/platform-event/pop_purple.svg';
import contentRed from '@/assets/icons/platform-event/content_red.svg';
import contentBlue from '@/assets/icons/platform-event/content_blue.svg';
import contentGreen from '@/assets/icons/platform-event/content_green.svg';
import contentPink from '@/assets/icons/platform-event/content_pink.svg';
import contentPurple from '@/assets/icons/platform-event/content_purple.svg';

export type Color = 'blue' | 'green' | 'pink' | 'purple' | 'red';
interface StructureProps {
  color: 'blue' | 'green' | 'pink' | 'purple' | 'red';
  text?: string;
}

const colorMap = {
  red: {
    pop: popRed,
    circle: circleRed,
    content: contentRed,
    color: '',
  },
  blue: {
    pop: popBlue,
    circle: circleBlue,
    content: contentBlue,
  },
  green: {
    pop: popGreen,
    circle: circleGreen,
    content: contentGreen,
  },
  pink: {
    pop: popPink,
    circle: circlePink,
    content: contentPink,
  },
  purple: {
    pop: popPurple,
    circle: circlePurple,
    content: contentPurple,
  },
};
const Structure: React.FC<StructureProps> = ({ color, text = '' }) => {
  const [hover, setHover] = React.useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className={`flex flex-col flex-wrap justify-center items-center mx-4 transition transform ${hover ? '-translate-y-2' : '-translate-y-0'} ${hover ? 'scale-105' : 'scale-100'} `}>
      <div className="text-center w-56 h-52 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={colorMap[color].pop} className="w-full h-full" alt="" />
        <p className="block w-52 absolute left-0 top-0 break-words text-left px-4 py-2 text-sm font-bold text-title">
          {text}
        </p>
      </div>
      <div className="text-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={colorMap[color].circle} alt="" />
      </div>
      <div className="w-0 border-2 border-solid border-red-500 h-32" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <div className="w-8 h-8 bg-red-500 rounded-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <div className="text-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={colorMap[color].content} alt="" />
      </div>
    </div>
  );
};

export default Structure;
