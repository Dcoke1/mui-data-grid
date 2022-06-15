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
          <Route path="/" element={<Navigate to="/patients" />} />
          <Route path="/patients/:id" element={<ViewPatient />} />
          <Route path="/patients" element={<ListPatients />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
