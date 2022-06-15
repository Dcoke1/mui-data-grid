import Layout from './components/Layout';
import ViewPatient from './components/ViewPatient';
import ListPatients from './components/ListPatients';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';

export function App(): JSX.Element {
  const baseUrl = useParams();
  console.log(baseUrl);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/mui-data-grid" />} />
          <Route path="/mui-data-grid/:id" element={<ViewPatient />} />
          <Route path="/mui-data-grid" element={<ListPatients />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
