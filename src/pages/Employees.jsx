import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Avatar, Typography, TextField } from '@mui/material';
import { employeesData } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      field: 'EmployeeProfile',
      headerName: 'Employee',
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar alt={params.row.Name} src={params.row.EmployeeImage} />
          <Box>
            <Typography variant="subtitle2">{params.row.Name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {params.row.Title}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: 'Title',
      headerName: 'Designation',
      width: 150,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Country',
      headerName: 'Country',
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar
            alt={params.row.Country}
            src={params.row.CountryImage}
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant="body2">{params.row.Country}</Typography>
        </Box>
      ),
    },
    {
      field: 'HireDate',
      headerName: 'Hire Date',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'ReportsTo',
      headerName: 'Reports To',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'EmployeeID',
      headerName: 'Employee ID',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
  ];

  const filteredData = employeesData.filter((item) =>
    Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: '16px' }}
      />

      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredData.map((row, index) => ({ id: index, ...row }))}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </Box>
    </div>
  );
};

export default Employees;
