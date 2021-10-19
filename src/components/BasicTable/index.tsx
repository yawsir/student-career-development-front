/*
 * @Author: yuyang
 * @Date: 2021-10-19 15:40:06
 * @LastEditTime: 2021-10-19 15:55:39
 * @LastEditors: yuyang
 */
import React from 'react';
import { Table, TableProps } from 'antd';
import styles from './index.less';

type ColumnsType<RecordType extends object = any> = TableProps<RecordType>['columns'];

interface BasicTableProps<RecordType> extends TableProps<RecordType> {
  rowKey: string | ((record: RecordType, index?: number) => React.Key);
  columns?: ColumnsType;
}

function BasicTable<RecordType extends object = any>(
  props: BasicTableProps<RecordType>,
): JSX.Element {
  return (
    <Table
      bordered
      className={styles['no-hover']}
      pagination={false}
      {...props}
    />
  );
}

export default BasicTable;
