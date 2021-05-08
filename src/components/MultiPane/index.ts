/*
 * @Author: yuyang
 * @Date: 2021-02-02 16:10:55
 * @LastEditTime: 2021-03-22 17:47:09
 * @LastEditors: yuyang
 */
import InternalMultiPane from './MultiPane';
import Item from './MultiPaneItem';

type InternalMultiPaneType = typeof InternalMultiPane;
interface MultiPaneInterface extends InternalMultiPaneType {
  Item: typeof Item;
}

const MultiPane = InternalMultiPane as MultiPaneInterface;
MultiPane.Item = Item;

export default MultiPane;
