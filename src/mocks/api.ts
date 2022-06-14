// Please do not change anything in this file!
import patients from './data.json';

type Patient = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  sex: string;
  active: boolean;
  updated_at: string;
  created_at: string;
};

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getPatients = async (): Promise<Array<Patient>> => {
  await delay(1500);
  return patients;
};

const getPatient = async (id: number): Promise<Patient> => {
  await delay(1000);
  return patients.filter((p: any) => p.id === id)[0];
};

export { getPatients, getPatient };
