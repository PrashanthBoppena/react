import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
} from '@mui/material';
import MaterialTable from 'material-table';

const TableComponent = ({ data }) => {
  const [query, setQuery] = useState("");

  const filteredData = data ? data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  ) : [];

  return (
    <Card style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <CardContent>
        {(!data || data.length === 0) ? (
          <Typography variant="h6" color="textSecondary">
            No data available
          </Typography>
        ) : (
          <>
            <Grid container justifyContent="flex-end" style={{ marginBottom: '10px' }}>
              <TextField
                label="Search"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ marginBottom: '20px' }}
              />
            </Grid>
            <MaterialTable
              columns={Object.keys(data[0]).map(key => ({ title: key, field: key }))}
              data={filteredData}
              title=""
              options={{
                search: false,
                paging: false,
                filtering: false,
                headerStyle: {
                  backgroundColor: '#f5f5f5',
                  fontWeight: 'bold',
                },
                rowStyle: {
                  backgroundColor: '#fff',
                },
              }}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TableComponent;
