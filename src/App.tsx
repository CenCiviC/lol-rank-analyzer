import { GlobalPortal } from 'GlobalPortal';
import TestPage from 'pages/TestPage';

function App() {
  return (
    <GlobalPortal.Provider>
      <TestPage />
    </GlobalPortal.Provider>
  );
}

export default App;
