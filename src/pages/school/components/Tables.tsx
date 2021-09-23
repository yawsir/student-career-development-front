/* eslint-disable max-len */
/*
 * @Author: yuyang
 * @Date: 2021-09-22 15:46:51
 * @LastEditTime: 2021-09-23 20:44:36
 * @LastEditors: yuyang
 */
import React from 'react';
import { Link } from 'umi';
import MultiPane from '@/components/MultiPane';
import { Table, TableProps } from 'antd';
import styles from '../index.less';
import { articleTableData1, articleTableData2, ArticleTableDataType } from '../news-list';

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

const Tables: React.FC<TablesProps> = () => {
  const [tab, setTab] = React.useState('tab1');
  return (
    <div>
      <div className="flex justify-start items-start">
        <div>
          <ul className="list-none">
            <li
              className={`transition-all border-2 border-r-0 border-secondary border-solid text-left cursor-pointer ${tab === 'tab1' ? 'text-white' : 'text-secondary'} text-xl mb-10 w-48 px-6 py-10 ${tab === 'tab1' ? 'bg-secondary ' : 'bg-white'} rounded-l-2xl`}
              onMouseEnter={() => setTab('tab1')}
            >
              国家
            </li>
            <li
              className={`transition-all border-2 border-r-0 border-secondary border-solid text-left cursor-pointer ${tab === 'tab2' ? 'text-white' : 'text-secondary'} text-xl mb-10 w-48 px-6 py-10 ${tab === 'tab2' ? 'bg-secondary ' : 'bg-white'} rounded-l-2xl`}
              onMouseEnter={() => setTab('tab2')}
            >
              省级
            </li>
            <li
              className={`transition-all border-2 border-r-0 border-secondary border-solid text-left cursor-pointer ${tab === 'tab3' ? 'text-white' : 'text-secondary'} text-xl mb-10 w-48 px-6 py-10 ${tab === 'tab3' ? 'bg-secondary ' : 'bg-white'} rounded-l-2xl`}
              onMouseEnter={() => setTab('tab3')}
            >
              市级
            </li>
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
              />
            </MultiPane.Item>
            <MultiPane.Item name="tab2">
              <Table
                columns={columns2}
                dataSource={articleTableData2}
                rowKey="id"
                bordered
                className={styles['no-hover']}
              />
            </MultiPane.Item>
            <MultiPane.Item name="tab3">
              <Table
                columns={columns2}
                dataSource={articleTableData2}
                rowKey="id"
                bordered
                className={styles['no-hover']}
              />
            </MultiPane.Item>
          </MultiPane>
        </div>
      </div>
    </div>
  );
};

export default Tables;
