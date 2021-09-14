/*
 * @Author: yuyang
 * @Date: 2021-08-31 17:24:02
 * @LastEditTime: 2021-09-14 17:53:30
 * @LastEditors: yuyang
 */
import React from 'react';
import { Link } from 'umi';
import NewsContainer from '@/components/NewsContainer';
import NewsList from '@/components/NewsList';
import { Table, TableProps } from 'antd';
import { tabs1, articleTableData, ArticleTableDataType } from './news-list';
import styles from './index.less';

interface SchoolProps {

}

const TableTitle: React.FC<{}> = ({ children }) => <span className="text-blue-400">{children}</span>;

const columns: TableProps<ArticleTableDataType>['columns'] = [
  {
    title: <TableTitle>序号</TableTitle>,
    render: (_, __, index) => index + 1,
    className: 'bg-table-odd-column',
    align: 'center',
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

const School: React.FC<SchoolProps> = () => (
  <NewsContainer>
    <div className="container mx-auto text-4xl bg-white py-2">
      <div className="w-3/4 mx-auto p-4">
        <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
          <span className="inline-block px-8 py-2 border-0 border-b-2 border-solid border-primary">学校总体生涯教育设计案例</span>
        </h3>
        <div className="w-full border-0 border-b border-solid border-gray-400">
          <NewsList listStyle="square" tabs={tabs1} textCentered />
        </div>
      </div>
      
      <div className="w-3/4 mx-auto p-4">
        <h3 className="border-0 border-b border-solid border-gray-400 text-center pb-8">
          <span className="inline-block px-8 py-2 border-0 border-b-2 border-solid border-primary">政策文件解读</span>
        </h3>
        <Table
          columns={columns}
          dataSource={articleTableData}
          rowKey="id"
          bordered
          className={styles['no-hover']}
        />
      </div>
    </div>
  </NewsContainer>
);

export default School;
