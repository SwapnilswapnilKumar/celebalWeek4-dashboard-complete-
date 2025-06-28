import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Avatar, Typography, Button } from '@mui/material';
import { customersData } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const [rows, setRows] = useState(
    customersData.map((item, index) => ({ id: index, ...item }))
  );
  const [selectionModel, setSelectionModel] = useState([]);

  const handleDelete = (selectedIDs) => {
    setRows(rows.filter((row) => !selectedIDs.includes(row.id)));
  };

  const columns = [
    {
      field: 'Name',
      headerName: 'Name',
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            src={params.row.CustomerImage}
            alt={params.row.CustomerName}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" fontSize="1rem">
              {params.row.CustomerName}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="0.85rem">
              {params.row.CustomerEmail}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: 'ProjectName',
      headerName: 'Project Name',
      width: 200,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Typography variant="body2" textAlign="center" fontSize="0.9rem">
          {params.value}
        </Typography>
      ),
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 140,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor: params.row.StatusBg,
            color: '#000',
            padding: '4px 10px',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '0.8rem',
            textAlign: 'center',
          }}
        >
          {params.row.Status}
        </Box>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{ fontSize: '0.75rem', padding: '4px 10px' }}
          onClick={() => handleDelete([params.id])}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      {selectionModel.length > 0 && (
        <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" fontWeight="bold" fontSize="1rem">
            Selected: {selectionModel.length}
          </Typography>
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{ fontSize: '0.8rem', padding: '4px 12px' }}
            onClick={() => handleDelete(selectionModel)}
          >
            Delete Selected
          </Button>
        </Box>
      )}

      <Box
        sx={{
          height: 600,
          width: '100%',
          '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f0f0f0', fontWeight: 'bold', fontSize: '1rem' },
          '& .MuiDataGrid-cell': { fontSize: '0.9rem' },
          '& .MuiDataGrid-row:hover': { backgroundColor: '#f9f9f9' },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          selectionModel={selectionModel}
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
          }}
        />
      </Box>
    </div>
  );
};

export default Customers;
