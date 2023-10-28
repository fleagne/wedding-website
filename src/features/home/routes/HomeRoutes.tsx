import { CountDown } from './CountDown';
import { Message } from './Message';
import { RSVP } from './RSVP';
import { Top } from './Top';

export const HomeRoutes = (): JSX.Element => {
  return (
    <>
      <Top />
      <Message />
      <CountDown />
      <RSVP />
    </>
  );
};
