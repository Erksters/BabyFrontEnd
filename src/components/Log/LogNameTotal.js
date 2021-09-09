import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const LogNameTotal = props => {
    const { arrayOfSearches } = props;

    const useStyles = makeStyles({
        table: {
            maxWidth: 650,
        },
    });
    const classes = useStyles();
    return (
        <>
            <div >


                <TableContainer component={Paper} style={{ justifyContent: 'center', display: 'flex' }}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {arrayOfSearches.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {row[0]}
                                    </TableCell>
                                    <TableCell align="right">{row[1].toLocaleString("en-US")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default LogNameTotal;
