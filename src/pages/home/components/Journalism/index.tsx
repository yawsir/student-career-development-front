/*
 * @Author: yuyang
 * @Date: 2021-05-08 08:42:16
 * @LastEditTime: 2021-07-06 17:32:54
 * @LastEditors: yuyang
 */
import InternalJournalism, { Description } from './Journalism';
import Content from './Content';

type InternalJournalismType = typeof InternalJournalism;

interface JournalismInterface extends InternalJournalismType {
  Description: typeof Description;
  Content: typeof Content;
}

const Journalism = InternalJournalism as JournalismInterface;
Journalism.Description = Description;
Journalism.Content = Content;

export default Journalism;
