import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TablePagination,
  TextField,
  TableSortLabel,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  fetchTicketsRequest,
  setPage,
  setRowsPerPage,
  setSearchTerm,
  setSortOrder,
  setSortBy,
} from '../../redux/actions/ticketDetailsActions';

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
    overflowX: 'auto',
  },
  header: {
    backgroundColor: '#f5f5f5',
  },
  cell: {
    color: '#333',
  },
});

const TicketDetailsTab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const ticketState = useSelector((state) => state.ticket);

  const {
    data = [],
    total = 0,
    page = 0,
    rowsPerPage = 10,
    searchTerm = '',
    sortOrder = 'asc',
    sortBy = 'id',
    loading,
    error,
  } = ticketState || {};

  const totalRec = data.length < rowsPerPage ? data.length : data.length + 1;

  const columns = [
    { id: 'id', label: 'Id' },
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'body', label: 'Comment' },
    { id: 'postId', label: 'Post ID' },
  ];

  useEffect(() => {
    dispatch(fetchTicketsRequest({ page, rowsPerPage }));
  }, [dispatch, page, rowsPerPage]);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleChangePage = (event, newPage) => {
    dispatch(setPage(newPage));
    dispatch(fetchTicketsRequest({ page: newPage+1, rowsPerPage }));
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    dispatch(setRowsPerPage(newRowsPerPage));
    dispatch(fetchTicketsRequest({ page, rowsPerPage: newRowsPerPage }));
  };

  const handleRequestSort = (property) => {
    const isAsc = sortBy === property && sortOrder === 'asc';
    dispatch(setSortOrder(isAsc ? 'desc' : 'asc'));
    dispatch(setSortBy(property));
  };

  const filteredData = data.filter((row) =>
    columns.some((column) =>
      String(row[column.id]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  return (
    <Paper>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead className={classes.header}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sortDirection={sortBy === column.id ? sortOrder : false}
                >
                  <TableSortLabel
                    active={sortBy === column.id}
                    direction={sortBy === column.id ? sortOrder : 'asc'}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id} className={classes.cell}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalRec}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TicketDetailsTab;
