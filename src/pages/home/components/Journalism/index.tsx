/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:42:16
 * @LastEditTime: 2021-07-06 17:32:54
 * @LastEditors: yuyang
 */
import InternalJournalism from './Journalism';
import InternalDescriptions, { DescriptionItem } from './Description';
import Content from './Content';

type InternalJournalismType = typeof InternalJournalism;
type InternalDescriptions = typeof InternalDescriptions;

interface DescriptionsInterface extends InternalDescriptions {
  Item: typeof DescriptionItem;
}

const Descriptions = InternalDescriptions as DescriptionsInterface;
Descriptions.Item = DescriptionItem;

interface JournalismInterface extends InternalJournalismType {
  Descriptions: typeof Descriptions;
  Content: typeof Content;
}

const Journalism = InternalJournalism as JournalismInterface;
Journalism.Descriptions = Descriptions;
Journalism.Content = Content;

export default Journalism;
