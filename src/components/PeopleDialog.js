import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  DialogActions,
  Button
} from "@material-ui/core";

const PeopleDialog = ({ email, onClose, data, open }) => {
  const element = data[0];
  const keys = element ? Object.keys(element) : [];
  return (
    <Dialog maxWidth="sm" fullWidth onClose={onClose} open={open}>
      <DialogTitle id="dialog-title">{email || ""}</DialogTitle>
      <DialogContent id="dialog-content">
        <Table>
          <TableHead>
            <TableRow>
              {keys.map(key => (
                <TableCell key={key}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={`data--row--${i}`}>
                {keys.map(key => (
                  <TableCell key={`data--row--${i}--${key}`}>
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions id="dialog-actions">
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PeopleDialog;
