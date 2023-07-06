import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CounterContainer } from "../counter/CounterContainer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { clearCart, removeById } from "../../../store/cartSlice";
const style = {
  position: "absolute",
  top: "15%",
  right: "3%",
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
  minHeight: "480px",
  width: { xs: 320, sm: 380 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
export const CustomModal = ({
  open,
  handleClose,
  cart,
  onAdd,
  dispatch,
  totalPrecio,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              color="primary"
              fontWeight={600}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              CART ({cart.length})
            </Typography>
            <Button
              onClick={() => dispatch(clearCart())}
              sx={{
                textTransform: "none",
              }}
            >
              <Typography
                fontSize={15}
                sx={{ textDecoration: "underline", opacity: "50%" }}
              >
                Remove all
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxHeight: 240,
              overflow: "auto",
            }}
          >
            {!(totalPrecio == 0) ? (
              cart.map((prod) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    key={prod?.id}
                  >
                    <Box sx={{ display: "flex" }}>
                      <IconButton onClick={() => dispatch(removeById(prod.id))}>
                        <DeleteForeverIcon />
                      </IconButton>
                      <img
                        style={{ maxHeight: 64, maxWidth: 64 }}
                        src={prod?.image}
                        alt=""
                      />
                      <Box sx={{ p: "8px 0 0 8px" }}>
                        <Typography fontSize={15} fontWeight={700}>
                          {prod?.subName}
                        </Typography>
                        <Typography
                          fontSize={15}
                          fontWeight={700}
                          sx={{ opacity: "50%" }}
                        >
                          $ {prod?.price}
                        </Typography>
                      </Box>
                    </Box>
                    <CounterContainer
                      id={prod?.id}
                      quantity={prod?.quantity}
                      anchocontador={40}
                      ancho={95}
                      addBoton={false}
                      onAdd={onAdd}
                      stock={prod.stock}
                    />
                  </Box>
                );
              })
            ) : (
              <Typography sx={{ textAlign: "center", color: "primary.main" }}>
                No hay productos
              </Typography>
            )}
          </Box>
          <Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <Typography>TOTAL</Typography>
              <Typography fontWeight={600}>${totalPrecio}</Typography>
            </Box>
            <Link to="/checkout">
              <Button
                color={"secondary"}
                variant="contained"
                sx={{ borderRadius: 0, width: "100%" }}
              >
                CHECKOUT
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
