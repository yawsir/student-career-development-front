/*
 * @Author: yuyang
 * @Date: 2021-09-16 23:04:22
 * @LastEditTime: 2021-09-16 23:12:15
 * @LastEditors: yuyang
 */
import React from 'react';
import socialBanner from '@/assets/social_banner.jpg';
import TipModal from './components/TipModal';

interface SocialProps {

}
const Social: React.FC<SocialProps> = () => (
  <div>
    <div>
      <img src={socialBanner} alt="" className="w-full h-full object-cover object-center" />
    </div>
    <TipModal modalTitle={<div className="text-gray-500 text-xl">温馨提示</div>} />
  </div>
);

export default Social;
