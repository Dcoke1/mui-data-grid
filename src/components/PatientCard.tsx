import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import logo from '../assets/logo-light.svg';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

type PatientDetailsProps = {
  first_name: string;
  last_name: string;
  email: string;
  sex: string;
  active: boolean;
  created_at: string;
};

export default function PatientCard({
  first_name,
  last_name,
  email,
  sex,
  active,
  created_at,
}: PatientDetailsProps) {
  const date = new Date(created_at).toDateString();

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia>
        <img src={logo} alt="logo" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {first_name + ' ' + last_name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          <EmailIcon />
          {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {sex === 'M' ? <ManIcon /> : <WomanIcon />}
          {sex}
        </Typography>
        {active === true ? (
          <Typography variant="body2" className="active">
            Active Patient
          </Typography>
        ) : (
          <Typography variant="body2" className="inactive">
            Inactive Patient
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'/'}>
          <Button variant="contained" size="large">
            Back to Patient List
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
