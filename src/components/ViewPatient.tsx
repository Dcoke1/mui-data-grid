import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

// Uncomment to use the mock api calls.
import * as api from '../mocks/api';
import PatientCard from './PatientCard';
import Loading from './Loading';

type PatientParams = {
  id: number | any;
};

const ViewPatient = (): ReactElement => {
  const { id } = useParams<PatientParams>();
  const [patient, setPatient] = React.useState(Object);

  console.log(patient);
  React.useEffect(() => {
    api.getPatient(parseInt(id)).then((result) => setPatient(result));
  }, [id]);

  const { first_name, last_name, email, sex, active, created_at } = patient;

  return Object.keys(patient).length === 0 ? (
    <Loading />
  ) : (
    <Box>
      {created_at && (
        <PatientCard
          first_name={first_name}
          last_name={last_name}
          email={email}
          sex={sex}
          active={active}
          created_at={created_at}
        />
      )}
    </Box>
  );
};

export default ViewPatient;
