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

const DialogCount = ({ email, onClose, charCounter, open }) => {
  return (
    <Dialog maxWidth="sm" fullWidth onClose={onClose} open={open}>
      <DialogTitle id="simple-dialog-title">{email}</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Character</TableCell>
              <TableCell>Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {charCounter.map(({ key, count }) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCount;
