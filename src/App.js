import React from 'react';

import { Neighborhoods } from './components/Neighborhoods';
import { Stores } from './components/Stores';

const App = config => {
  return (
    <main>
      {/* <Neighborhoods {...config} /> */}
      <Stores />
    </main>
  );
};

export default App;
