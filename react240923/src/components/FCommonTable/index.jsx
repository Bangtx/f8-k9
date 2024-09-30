import React from 'react';
import {TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const FCommonTable = ({columns, rows, maxWidth, onUpdate, onDelete}) => {
    return (
        <>
            <TableContainer sx={{maxWidth: maxWidth, margin: '0 auto'}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map(column => <TableCell width={column?.width} key={column.name}>{column.text}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row, ridx) => {
                                return (
                                    <TableRow key={`${ridx}`}>
                                        {
                                            columns.map(column => {
                                                if (column.name === 'action') {
                                                    return <TableCell key={`${ridx}${column.name}`}>
                                                                <EditIcon onClick={() => onUpdate(row)} sx={{color: 'green'}}/>
                                                                <DeleteOutlineIcon onClick={() => onDelete(row.id)} sx={{color: 'red'}}/>
                                                            </TableCell>
                                                }
                                                return <TableCell key={`${ridx}${column.name}`}>{row[column.name]}</TableCell>
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default FCommonTable
