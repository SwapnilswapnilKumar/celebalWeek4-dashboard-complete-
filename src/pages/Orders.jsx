import React from 'react';
import { Table, ScrollArea, Button } from '@mantine/core';
import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  const handleExportExcel = () => {
    console.log('Export to Excel clicked');
  };

  const handleExportPdf = () => {
    console.log('Export to PDF clicked');
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

      <div className="flex mb-4 gap-2">
        <Button color="blue" onClick={handleExportExcel}>
          Export to Excel
        </Button>
        <Button color="red" onClick={handleExportPdf}>
          Export to PDF
        </Button>
      </div>

      <ScrollArea>
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              {ordersGrid.map((col, index) => (
                <th key={index}>{col.headerText}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={index}>
                {ordersGrid.map((col, colIndex) => (
                  <td key={colIndex}>{order[col.field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default Orders;
