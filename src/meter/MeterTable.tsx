import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchMeters } from '../api/fetchMeters';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import './MeterTable.css';

interface IColumn {
  field: string;
  headerName: string;
  width?: number;
  renderCell?: (params: any) => JSX.Element;
}

export interface IRow {
  id: string;
  display_name: string;
  api_name: string;
  active: boolean;
  used_for_billing: boolean;
  type: string;
}

const columns: IColumn[] = [
  { field: 'display_name', headerName: 'Display Name', width: 200,
    renderCell: (params: any) => {
      return <Link to={`/meter/${params.id}`} state={{ data: params.row }}>{params.row.display_name}</Link>;
    } },
  { field: 'api_name', headerName: 'API Name', width: 200 },
  { field: 'active', headerName: 'Active', width: 100 },
  { field: 'used_for_billing', headerName: 'Billing', width: 100 },
  { field: 'type', headerName: 'Type', width: 100 },
];

const MeterTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchMeters()
      .then((data) => {
        setRows(data);
      });
  }, []);

  return (
    <div>
      <h2>Meters</h2>
      <DataGrid rows={rows} columns={columns} />
      <Box>
        <Button variant="contained" component={Link} to="/meter/new">New Meter</Button>
      </Box>
    </div>
  );
}

export default MeterTable;
