import * as React from 'react';
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Loading from './Loading';

type PatientGridProps = {
  rows: Array<[]> | any;
};

const columns: Array<[]> | any = [
  {
    field: 'id',
    headerName: 'ID',
    renderCell: (params: { id: number }) => (
      <Link to={`/mui-data-grid/${params.id}`}>
        <Button variant="contained" size="small">
          View
        </Button>
      </Link>
    ),
    width: 100,
    sortable: false,
  },
  {
    field: 'first_name',
    headerName: 'First name',
    width: 120,
    sortable: false,
    editable: false,
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 120,
    sortable: true,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 140,
    sortable: false,
    editable: false,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.first_name || ''} ${params.row.last_name || ''}`,
  },
  {
    field: 'sex',
    headerName: 'Sex',
    type: 'string',
    width: 90,
    sortable: true,
    editable: false,
  },
  {
    field: 'created_at',
    headerName: 'Created At',
    type: 'string',
    width: 110,
    sortable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${new Date(params.row.created_at).toLocaleDateString() || ''}`,
  },
];

export default function PatientGrid({ rows }: PatientGridProps) {
  return (
    <div style={{ height: 641, width: '100%' }}>
      {rows && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          rowsPerPageOptions={[10]}
          components={{
            NoRowsOverlay: () => <Loading />,
          }}
        />
      )}
    </div>
  );
}
