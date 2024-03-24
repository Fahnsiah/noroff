import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import Create from "./Create";

const List = ({
  data,
  formData,
  createnew,
  handleCreateNew,
  buttontext,
  handleFormData,
  handleSubmit,
  handleDelete,
  getFormData,
}) => {
  return (
    <Box>
      <Box>
        <Button
          onClick={() => {
            handleCreateNew();
          }}
        >
          {buttontext}
        </Button>
      </Box>
      <div>
        {!createnew && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="left">Middle Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Gender</TableCell>
                  <TableCell align="middle">Date of Birth</TableCell>
                  <TableCell align="middle">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.first_name}
                    </TableCell>
                    <TableCell align="left">{row.middle_name}</TableCell>
                    <TableCell align="left">{row.last_name}</TableCell>
                    <TableCell align="left">{row.gender}</TableCell>
                    <TableCell align="middle">{row.dob}</TableCell>
                    <TableCell align="middle">
                      <Button onClick={() => getFormData(row.id)}>Edit</Button>
                      <Button onClick={() => handleDelete(row.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <div>
        {createnew && (
          <Create
            formData={formData}
            handleFormData={handleFormData}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </Box>
  );
};

export default List;
