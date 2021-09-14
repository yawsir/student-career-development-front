/*
 * @Author: yuyang
 * @Date: 2021-09-14 23:02:28
 * @LastEditTime: 2021-09-14 23:36:16
 * @LastEditors: yuyang
 */
import InternalList from './List';
import ListItem from './ListItem';
import SubItem from './SubItem';

type InternalListType = typeof InternalList;

interface ListInterface extends InternalListType {
  Item: typeof ListItem;
  SubItem: typeof SubItem;
}

const List = InternalList as ListInterface;

List.Item = ListItem;
List.SubItem = SubItem;

export default List;
