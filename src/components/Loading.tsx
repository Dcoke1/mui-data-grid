import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box className="center">
      <CircularProgress />
      <div className="mt">Loading</div>
    </Box>
  );
}
