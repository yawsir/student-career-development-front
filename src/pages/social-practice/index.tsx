/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-09-16 23:04:22
 * @LastEditTime: 2021-10-19 16:07:25
 * @LastEditors: yuyang
 */
import React from 'react';
import { TableProps } from 'antd';
import { Link } from 'umi';
import socialBanner from '@/assets/social/banner.png';
import NewsContainer from '@/components/NewsContainer';
import TitleLevel1 from '@/components/TitleLevel1';
import BasicTable from '@/components/BasicTable';
import socialBg from '@/assets/bgs/about.png';
import enterpriseActivities, { Activity, EnterpriseActivity } from '@/data/enterprise-activities';
import BigEvent from './components/BigEvent';

interface SocialProps {

}
const TableTitle: React.FC<{}> = ({ children }) => <span className="text-blue-400">{children}</span>;

const columns: TableProps<Activity>['columns'] = [
  {
    title: <TableTitle>活动名称</TableTitle>,
    dataIndex: 'name',
    width: 300,
    className: 'bg-table-even-column',
    render: (_, record) => (
      <Link className="text-black text-left" to={`/article/${record.id}`}>
        {record.name}
      </Link>
    ),
  },
  {
    title: <TableTitle>活动类型</TableTitle>,
    dataIndex: 'type',
    className: 'bg-table-odd-column',
    align: 'center',
  },
  {
    title: <TableTitle>主办企业</TableTitle>,
    dataIndex: 'enterprise',
    className: 'bg-table-even-column',
    align: 'center',
  },
  {
    title: <TableTitle>活动日期</TableTitle>,
    dataIndex: 'date',
    className: 'bg-table-odd-column',
    align: 'center',
  },
  {
    title: <TableTitle>申请期限</TableTitle>,
    dataIndex: 'limit',
    className: 'bg-table-even-column',
    align: 'center',
  },
];
const Social: React.FC<SocialProps> = () => {
  const [current, setCurrent] = React.useState<EnterpriseActivity>(enterpriseActivities[0]);
  return (
    <div>
      <div className="w-full">
        <img src={socialBanner} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <NewsContainer background={socialBg}>
        <section className="w-full">
          <TitleLevel1 topText="未来大事件" bottomText="社会实践" />
          <div className="w-3/4 mx-auto">
            <BigEvent />
          </div>
        </section>
        <section className="w-full pb-14">
          <div className="w-full">
            <ul className="flex items-center justify-center bg-primary list-none px-12 py-0">
              {
                enterpriseActivities.map((item) => (
                  <li className="px-2" key={item.id}>
                    <div
                      className={`w-36 h-12 flex justify-center items-center cursor-pointer transition hover:bg-translucent-black ${current.id === item.id ? 'bg-translucent-black' : 'bg-transparent'}`}
                      onMouseEnter={() => setCurrent(item)}
                    >
                      <img src={item.logo} alt="" />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="w-3/4 mx-auto mt-6">
            <BasicTable
              rowKey="id"
              dataSource={current.activities}
              columns={columns}
            />
          </div>
        </section>
      </NewsContainer>
    </div>
  );
};

export default Social;
