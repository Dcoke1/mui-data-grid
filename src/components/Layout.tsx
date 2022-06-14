import { ReactElement } from 'react';
import { Container } from '@mui/material';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = (props: Props): ReactElement => {
  return <Container maxWidth="md">{props.children}</Container>;
};

export default Layout;
