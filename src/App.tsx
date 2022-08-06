import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppWithRouting from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppWithRouting />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
