import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(id, user, description, date, status) {
    return { id, user, description, date, status };
}

const rows = [
    createData(0, 'someone#0001', 'new channel', '14 Mar, 2019', 'Open'),
    createData(1, 'someoneelse#0002', 'new bot.', '15 Mar, 2019', 'Approved'),
    createData(2, 'someoneelse#0002', 'new bot.', '15 Mar, 2019', 'Approved'),
    createData(3, 'someoneelse#0002', 'new bot.', '15 Mar, 2019', 'Rejected'),
    createData(4, 'someoneelse#0002', 'new bot.', '15 Mar, 2019', 'Approved'),
];

const useStyles = makeStyles((theme) => ({
    bold: {
        fontWeight: 'bold'
    },
    extend: {
        marginTop: theme.spacing(3),
    },
    approved: {
        color: 'green'
    },
    rejected: {
        color: 'darkred'
    }
}));

export default function Suggestions() {
    const classes = useStyles();
    return (
        <React.Fragment>
            Suggestions
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.bold}>ID</TableCell>
                        <TableCell className={classes.bold}>User</TableCell>
                        <TableCell className={classes.bold}>Description</TableCell>
                        <TableCell className={classes.bold}>Date</TableCell>
                        <TableCell className={classes.bold} align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.user}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell align="right" className={colorSuggestionStatus(classes, row.status)}>{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.extend} />
        </React.Fragment>
    );
}

function colorSuggestionStatus(classes, status) {
    if (status === 'Approved') {
        return classes.approved;
    } else if (status === 'Rejected') {
        return classes.rejected;
    }
}