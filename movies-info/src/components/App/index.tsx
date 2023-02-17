import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContent from 'components/AppContent';

const App: React.FC = ():JSX.Element => {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;