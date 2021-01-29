import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'application_number', label: 'Application Number', minWidth: 170 },
  { id: 'funding_year', label: 'Year', minWidth: 60 },
  { id: 'ben', label: 'BEN', minWidth: 60 },
  {
    id: 'billed_entity_name',
    label: 'Name',
    minWidth: 170
  },
  {
    id: 'certified_by',
    label: 'Certified By',
    minWidth: 170
  },
  {
    id: 'certified_datetime',
    label: 'Date Certified',
    minWidth: 170
  }
];

const useStyles = makeStyles({
  paper: {
    margin: '5rem 1rem 0 1rem',
    width: '100%',
    height: '100%'
  },
  container: {
    height: '45rem'
  },
});

const TableData = () => {
  const [form470, openData] = useState([])
  useEffect(() => {
    axios.get('https://opendata.usac.org/resource/jp7a-89nd.json?funding_year=2019')
        .then(res => {
            openData(res.data);
        })
        .catch(err => {
            console.log(err)
        })
  }, []);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {form470 ? form470.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={value}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            }): null}
          </TableBody>
        </Table>
      </TableContainer>
      {form470 ?
        <TablePagination
          rowsPerPageOptions={[100, 25, 10]}
          component="div"
          count={form470.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      : null}
    </Paper>
  );
}

export default TableData
