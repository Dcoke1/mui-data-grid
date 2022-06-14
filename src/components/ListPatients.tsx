import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

// Uncomment to use the mock api calls.
import * as api from '../mocks/api';
import PatientGrid from './PatientGrid';

const ListPatients = (): ReactElement => {
  const [patients, setPatients] = React.useState(Array);

  React.useEffect(() => {
    api.getPatients().then((result) => setPatients(result));
  }, []);

  return (
    <Box>
      <PatientGrid rows={patients} />
    </Box>
  );
};

export default ListPatients;
