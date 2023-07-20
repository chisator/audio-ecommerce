import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  gap: 2,
  flexDirection: "column",
};
export const ModalDashboard = ({
  open,
  data,
  disabled,
  handleClose,
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            El form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              error={touched.name && errors.name ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="name"
              name="name"
              defaultValue={data.name}
              disabled={disabled}
            />
            <TextField
              error={touched.subName && errors.subName ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="subName"
              name="subName"
              defaultValue={data.subName}
              disabled={disabled}
            />
            <TextField
              error={touched.price && errors.price ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="price"
              name="price"
              defaultValue={data.price}
              disabled={disabled}
            />
            <TextField
              error={touched.stock && errors.stock ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="stock"
              name="stock"
              defaultValue={data.stock}
              disabled={disabled}
            />
            <TextField
              error={touched.new && errors.new ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="new"
              name="new"
              defaultValue={data.new}
              disabled={disabled}
            />
            <TextField
              error={touched.category && errors.category ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="category"
              name="category"
              defaultValue={data.category}
              disabled={disabled}
            />
            <TextField
              error={touched.description && errors.description ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="description"
              name="description"
              defaultValue={data.description}
              disabled={disabled}
            />
            <TextField
              error={touched.features && errors.features ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="features"
              name="features"
              defaultValue={data.features}
              disabled={disabled}
            />
            <TextField
              error={touched.includes && errors.includes ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="includes"
              name="includes"
              defaultValue={data.includes}
              disabled={disabled}
            />
            <TextField
              error={touched.image && errors.image ? true : false}
              onBlur={handleBlur}
              onChange={handleChange}
              label="image"
              name="image"
              defaultValue={data.image}
              disabled={disabled}
            />
            {!disabled && <Button type="submit">Enviar</Button>}

            <Button onClick={handleClose}>Cerrar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
