import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            {routes.map((route, index) => {
              const Page = route.page;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
