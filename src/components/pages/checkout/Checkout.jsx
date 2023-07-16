import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import Grid from "@mui/material/Unstable_Grid2";
import { ButtonBack } from "../../common/buttonBack/ButtonBack";
import "./Checkout.css";

export const Checkout = ({
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  cart,
  totalPrecio,
}) => {
  /* const [metodoPago, setMetodoPago] = useState("mercado"); */
  return (
    <>
      <ButtonBack />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: { md: "row", xs: "column" },
          maxWidth: { md: 1000 },
          m: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 6,
            m: "0px auto 10px",
            p: "40px",
            width: { lg: "60%", md: "60%", xs: "90%" },
            maxWidth: "730px",
            backgroundColor: "primary.second",
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" fontWeight={700} fontSize={32}>
            CHECKOUT
          </Typography>
          <form className="form-check" action="" onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Typography
                textTransform="uppercase"
                color="secondary.main"
                letterSpacing={0.93}
                fontSize={13}
                fontWeight={700}
                sx={{ width: "100%", p: 1 }}
              >
                Billing Details
              </Typography>
              <Grid xs={12} md={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <label className="labelCheckOut" htmlFor="name">
                    <Typography fontSize={12} fontWeight={700}>
                      Name
                    </Typography>
                  </label>
                  <TextField
                    autoComplete=""
                    placeholder="Alexei Ward"
                    className=""
                    id="name"
                    variant="outlined"
                    name="name"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    helperText={touched.name ? errors.name : null}
                    error={touched.name && errors.name ? true : false}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <label className="labelCheckOut" htmlFor="email">
                    <Typography fontSize={12} fontWeight={700}>
                      Email
                    </Typography>
                  </label>
                  <TextField
                    autoComplete="username"
                    placeholder="alexei@mail.com"
                    className=""
                    id="email"
                    variant="outlined"
                    name="email"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    helperText={touched.email ? errors.email : null}
                    error={touched.email && errors.email ? true : false}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <label className="labelCheckOut" htmlFor="phone">
                    <Typography fontSize={12} fontWeight={700}>
                      Phone Number
                    </Typography>
                  </label>
                  <TextField
                    autoComplete=""
                    placeholder="+1 202-555-0136"
                    className=""
                    id="phone"
                    variant="outlined"
                    name="phone"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    helperText={touched.phone ? errors.phone : null}
                    error={touched.phone && errors.phone ? true : false}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography
                textTransform="uppercase"
                color="secondary.main"
                letterSpacing={0.93}
                fontSize={13}
                fontWeight={700}
                sx={{ width: "100%", p: 1 }}
              >
                shipping info
              </Typography>
              <Grid xs={12}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <label className="labelCheckOut" htmlFor="address">
                    <Typography fontSize={12} fontWeight={700}>
                      Address
                    </Typography>
                  </label>
                  <TextField
                    autoComplete="address"
                    placeholder="1137 Williams Avenue"
                    className=""
                    id="address"
                    variant="outlined"
                    name="address"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    helperText={touched.address ? errors.address : null}
                    error={touched.address && errors.address ? true : false}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <label className="labelCheckOut" htmlFor="code">
                    <Typography fontSize={12} fontWeight={700}>
                      ZIP Code
                    </Typography>
                  </label>
                  <TextField
                    autoComplete=""
                    placeholder="1716"
                    className=""
                    id="code"
                    variant="outlined"
                    name="code"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code}
                    helperText={touched.code ? errors.code : null}
                    error={touched.code && errors.code ? true : false}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <label className="labelCheckOut" htmlFor="city">
                    <Typography fontSize={12} fontWeight={700}>
                      City
                    </Typography>
                  </label>
                  <TextField
                    autoComplete=""
                    placeholder="Merlo"
                    className=""
                    id="city"
                    variant="outlined"
                    name="city"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    helperText={touched.city ? errors.city : null}
                    error={touched.city && errors.city ? true : false}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <label className="labelCheckOut" htmlFor="country">
                    <Typography fontSize={12} fontWeight={700}>
                      Country
                    </Typography>
                  </label>
                  <TextField
                    autoComplete=""
                    placeholder="Argentina"
                    className=""
                    id="country"
                    variant="outlined"
                    name="country"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                    helperText={touched.country ? errors.country : null}
                    error={touched.country && errors.country ? true : false}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Typography
                textTransform="uppercase"
                color="secondary.main"
                letterSpacing={0.93}
                fontSize={13}
                fontWeight={700}
                sx={{ width: "100%", p: 1 }}
              >
                payment details
              </Typography>
              <Grid xs={12}>
                <FormControl sx={{ m: 1, width: "100%" }}>
                  <label className="labelCheckOut" htmlFor="payMethod">
                    <Typography fontSize={12} fontWeight={700}>
                      Payment Method
                    </Typography>
                  </label>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={handleChange}
                    defaultValue="efectivo"
                  >
                    <FormControlLabel
                      value="efectivo"
                      control={<Radio />}
                      label="Efectivo"
                    />
                    <FormControlLabel
                      value="mercado"
                      control={<Radio />}
                      label="Mercado Pago"
                    />
                  </RadioGroup>

                  {/*  <TextField
                    autoComplete=""
                    placeholder="Alexei Ward"
                    className=""
                    id="name"
                    variant="outlined"
                    name="name"
                    color="secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    helperText={touched.name ? errors.name : null}
                    error={touched.name && errors.name ? true : false}
                  /> */}
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Box
          sx={{
            width: { md: 350, xs: "90%" },
            maxWidth: "730px",
            height: 550,
            backgroundColor: "primary.second",
            p: 4,
            m: "0 auto 10px",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              fontSize={18}
              fontWeight={700}
              textTransform={"uppercase"}
            >
              summary
            </Typography>
          </Box>
          <Box>
            {cart.map((prod) => {
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
                  <Box>
                    <Typography
                      fontSize={15}
                      fontWeight={700}
                      sx={{ opacity: "50%" }}
                    >
                      x{prod.quantity}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: "9px 0",
              }}
            >
              <Typography>TOTAL</Typography>
              <Typography color={"secondary.main"}>$ {totalPrecio}</Typography>
            </Box>
            <Box textAlign={"center"}>
              <Button
                sx={{
                  width: { md: "100%", xs: 200 },
                  backgroundColor: "secondary.main",
                  color: "primary.second",
                  "&:hover": { backgroundColor: "primary.main" },
                }}
              >
                CONTINUE & PAY
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
