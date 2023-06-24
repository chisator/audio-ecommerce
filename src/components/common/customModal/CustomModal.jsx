import { Box, Button, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const style = {
  position: "absolute",
  top: "15%",
  right: "3%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minHeight: "480px",
  width: { xs: 320 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
export const CustomModal = ({ open, handleClose }) => {
  const products = false;
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
              CART ( )
            </Typography>
            <Button
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
          <Box>
            {products ? (
              products.map((prod) => {
                return (
                  <div key={prod.id}>
                    <img src={prod.image} alt="" />
                    <Typography>{prod.name}</Typography>
                    <Typography>{prod.price}</Typography>
                    <Box>
                      <Button>-</Button>
                      <Typography>1</Typography>
                      <Button>+</Button>
                    </Box>
                  </div>
                );
              })
            ) : (
              <Typography sx={{textAlign:"center"}}>No hay productos</Typography>
            )}
          </Box>
          <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between",mb:3 }}>
            <Typography>TOTAL</Typography>
            <Typography fontWeight={600}>$1,000</Typography>
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
