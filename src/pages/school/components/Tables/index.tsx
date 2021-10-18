/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-09-22 15:46:51
 * @LastEditTime: 2021-10-18 15:33:40
 * @LastEditors: yuyang
 */
import React from 'react';
import { Link } from 'umi';
import { Table, TableProps } from 'antd';
import MultiPane from '@/components/MultiPane';
import guojia from '@/assets/icons/guojia.png';
import shengji from '@/assets/icons/shengji.png';
import shiji from '@/assets/icons/shiji.png';
import styles from './index.less';
import { articleTableData1, articleTableData2, ArticleTableDataType } from '../../news-list';

interface TablesProps {

}
const TableTitle: React.FC<{}> = ({ children }) => <span className="text-blue-400">{children}</span>;
const columns: TableProps<ArticleTableDataType>['columns'] = [
  {
    title: <TableTitle>序号</TableTitle>,
    render: (_, __, index) => index + 1,
    className: 'bg-table-odd-column',
    align: 'center',
    width: 80,
  },
  {
    title: <TableTitle>标题</TableTitle>,
    dataIndex: 'title',
    width: 256,
    className: 'bg-table-even-column',
    render: (_, record) => (
      <Link className="text-black text-left" to={`/article/${record.id}`}>
        {record.title}
      </Link>
    ),
  },
  {
    title: <TableTitle>发文字号</TableTitle>,
    dataIndex: 'issueNumber',
    className: 'bg-table-odd-column',
    align: 'center',
  },
  {
    title: <TableTitle>成文日期</TableTitle>,
    dataIndex: 'createdDate',
    className: 'bg-table-even-column',
    align: 'center',
  },
  {
    title: <TableTitle>发布日期</TableTitle>,
    dataIndex: 'publishDate',
    className: 'bg-table-odd-column',
    align: 'center',
  },
];

const columns2: TableProps<ArticleTableDataType>['columns'] = [
  {
    title: <TableTitle>序号</TableTitle>,
    render: (_, __, index) => index + 1,
    className: 'bg-table-odd-column',
    align: 'center',
    width: 80,
  },
  {
    title: <TableTitle>标题</TableTitle>,
    dataIndex: 'title',
    width: 256,
    className: 'bg-table-even-column',
    render: (_, record) => (
      <Link className="text-black text-left" to={`/article/${record.id}`}>
        {record.title}
      </Link>
    ),
  },
  {
    title: <TableTitle>发布日期</TableTitle>,
    dataIndex: 'publishDate',
    className: 'bg-table-odd-column',
    align: 'center',
  },
];

const panes = [
  {
    id: 'tab1',
    name: '国家',
    image: guojia,
  },
  {
    id: 'tab2',
    name: '省级',
    image: shengji,
  },
  {
    id: 'tab3',
    name: '市级',
    image: shiji,
  },
];

const Tables: React.FC<TablesProps> = () => {
  const [tab, setTab] = React.useState('tab1');
  return (
    <div>
      <div className="flex justify-start items-start">
        <div className="w-52">
          <ul className="list-none p-0">
            {
              panes.map((item) => (
                <li
                  className="flex items-center text-xl mb-0 py-10"
                  onMouseEnter={() => setTab(item.id)}
                  key={item.id}
                >
                  <div className={`w-32 flex justify-start items-center px-3 py-1 transition-all text-left cursor-pointer border-2 border-primary border-solid rounded-full ${tab === item.id ? 'text-white' : 'text-title'} ${tab === item.id ? 'bg-primary ' : 'bg-white'}`}>
                    <span><img src={item.image} alt="" /></span>
                    <span>{item.name}</span>
                  </div>
                  <div className={`${tab === item.id ? 'block' : 'hidden'} ${styles.suffix}`}><div className={styles.suffixInner} /></div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="flex-1">
          <MultiPane current={tab}>
            <MultiPane.Item name="tab1">
              <Table
                columns={columns}
                dataSource={articleTableData1}
                rowKey="id"
                bordered
                className={styles['no-hover']}
                pagination={false}
              />
            </MultiPane.Item>
            <MultiPane.Item name="tab2">
              <Table
                columns={columns2}
                dataSource={articleTableData2}
                rowKey="id"
                bordered
                className={styles['no-hover']}
                pagination={false}
              />
            </MultiPane.Item>
            <MultiPane.Item name="tab3">
              <Table
                columns={columns2}
                dataSource={articleTableData2}
                rowKey="id"
                bordered
                className={styles['no-hover']}
                pagination={false}
              />
            </MultiPane.Item>
          </MultiPane>
        </div>
      </div>
    </div>
  );
};

export default Tables;
