/* eslint-disable react/no-array-index-key */
/*
 * @Author: yuyang
 * @Date: 2021-10-13 13:40:48
 * @LastEditTime: 2021-10-13 14:48:07
 * @LastEditors: yuyang
 */
import React from 'react';
import BasicSlider from '@/components/BasicSlider';
import f1 from '@/assets/friend-links/f1.png';
import f2 from '@/assets/friend-links/f2.png';
import f3 from '@/assets/friend-links/f3.png';
import f4 from '@/assets/friend-links/f4.png';
import f5 from '@/assets/friend-links/f5.png';

interface FriendLinksProps {

}
const FriendLinks: React.FC<FriendLinksProps> = () => {
  const links1 = [f1, f2, f3, f4];
  const links2 = [f5];
  return (
    <div className="w-full">
      <div className="flex justify-center items-center text-center mb-8">
        <span className="text-2xl px-16 py-4 rounded-md font-bold transition transform scale-100 hover:scale-110 bg-gradient-to-r from-bg-1 to-bg-2">
          友情链接
        </span>
      </div>
      <div className="w-full relative">
        <BasicSlider dots={false} autoplay={false}>
          <div className="px-32 py-4">
            <ul className="bg-custom-white2 w-full m-0 px-8 py-4 flex justify-start items-center list-none">
              {
                links1.map((item, idx) => (
                  <li key={idx} className="w-1/4 box-border">
                    <div className="transition transform hover:-translate-y-3" style={{ width: 232, height: 89, margin: '0 auto' }}>
                      <img src={item} alt="" className="w-full h-full border border-solid border-black object-center object-cover" />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="px-32 py-4">
            <ul className="bg-custom-white2 w-full m-0 px-8 py-4 flex justify-start items-center list-none">
              {
                links2.map((item, idx) => (
                  <li key={idx} className="w-1/4 box-border">
                    <div className="transition transform hover:-translate-y-3" style={{ width: 232, height: 89, margin: '0 auto' }}>
                      <img src={item} alt="" className="w-full h-full border border-solid border-black object-center object-cover" />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </BasicSlider>
      </div>
    </div>
  );
};

export default FriendLinks;
