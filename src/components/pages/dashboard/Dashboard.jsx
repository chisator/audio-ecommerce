import {
  CardMedia,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ModalDashboardContainer } from "../../common/modalDashboard/ModalDashboardContainer";
export const Dashboard = ({
  products,
  viewById,
  editById,
  deleteById,
  open,
  handleClose,
  disabled,
  data,
  setChangesProducts,
}) => {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <CardMedia
                    sx={{ maxWidth: 100, maxHeight: 100 }}
                    image={row.image}
                    component="img"
                    alt=""
                  />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">$ {row.price}</TableCell>
                <TableCell align="right">{row.stock}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => viewById(row)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => editById(row)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteById(row)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <ModalDashboardContainer
          setChangesProducts={setChangesProducts}
          open={open}
          handleClose={handleClose}
          data={data}
          disabled={disabled}
        />
      )}
    </>
  );
};
