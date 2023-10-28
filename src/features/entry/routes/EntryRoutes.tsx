import { Route, Routes } from 'react-router-dom';

import { Entry } from './Entry';
import { EntryConfirmation } from './EntryConfirmation';
import { EntryDone } from './EntryDone';

export const EntryRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/confirm" element={<EntryConfirmation />} />
      <Route path="/done" element={<EntryDone />} />
    </Routes>
  );
};
