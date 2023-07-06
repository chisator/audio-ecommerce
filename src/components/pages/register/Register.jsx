import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
export const Register = ({
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  showConfirmPassword,
  handleClickshowConfirmPassword,
  handleMouseDownConfirmPassword,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 6,
          m: "0px auto",
          p: "40px",
          width: { lg: "70%", xs: "90%" },

          backgroundColor: "primary.second",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight={700} fontSize={32}>
          REGISTER
        </Typography>
        <form className="form-login" action="" onSubmit={handleSubmit}>
          <Grid sx={{ width: "100%", mb: 5 }} container spacing={1}>
            <Typography
              textTransform="uppercase"
              color="secondary.main"
              letterSpacing={0.93}
              fontSize={13}
              fontWeight={700}
              sx={{ width: "100%", p: 1 }}
            >
              user Details
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
                  placeholder="Alexei"
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
                <label className="labelCheckOut" htmlFor="lastName">
                  <Typography fontSize={12} fontWeight={700}>
                    Last Name
                  </Typography>
                </label>
                <TextField
                  autoComplete=""
                  placeholder="Ward"
                  className=""
                  id="lastName"
                  variant="outlined"
                  name="lastName"
                  color="secondary"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  helperText={touched.lastName ? errors.lastName : null}
                  error={touched.lastName && errors.lastName ? true : false}
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
          <Grid sx={{ width: "100%", mb: 5 }} container spacing={1}>
            <Typography
              textTransform="uppercase"
              color="secondary.main"
              letterSpacing={0.93}
              fontSize={13}
              fontWeight={700}
              sx={{ width: "100%", p: 1 }}
            >
              login details
            </Typography>
            <Grid xs={12}>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <label className="labelCheckOut" htmlFor="email">
                  <Typography fontSize={12} fontWeight={700}>
                    Email
                  </Typography>
                </label>
                <TextField
                  autoComplete="email"
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
                <label className="labelCheckOut" htmlFor="code">
                  <Typography fontSize={12} fontWeight={700}>
                    Password
                  </Typography>
                </label>
                <OutlinedInput
                  autoComplete="current-password"
                  name="password"
                  color="secondary"
                  placeholder="******"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && errors.password ? true : false}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "primary.main" }} />
                        ) : (
                          <Visibility sx={{ color: "primary.main" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Typography
                  fontSize={12}
                  fontWeight={100}
                  sx={{ m: "3px 14px 0" }}
                  color={
                    touched.password && errors.password ? "#d32f2f" : false
                  }
                >
                  {touched.password ? errors.password : null}
                </Typography>
              </FormControl>
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <label className="labelCheckOut" htmlFor="confirmPassword">
                  <Typography fontSize={12} fontWeight={700}>
                    Confirm Password
                  </Typography>
                </label>
                <OutlinedInput
                  autoComplete="current-password"
                  name="confirmPassword"
                  color="secondary"
                  placeholder="******"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  error={
                    touched.confirmPassword && errors.confirmPassword
                      ? true
                      : false
                  }
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickshowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff sx={{ color: "primary.main" }} />
                        ) : (
                          <Visibility sx={{ color: "primary.main" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Typography
                  fontSize={12}
                  fontWeight={100}
                  sx={{ m: "3px 14px 0" }}
                  color={
                    touched.confirmPassword && errors.confirmPassword
                      ? "#d32f2f"
                      : false
                  }
                >
                  {touched.confirmPassword ? errors.confirmPassword : null}
                </Typography>
              </FormControl>
            </Grid>
          </Grid>
          <Grid sx={{ width: "100%", mb: 3 }} container spacing={1}>
            <Grid sx={{ display: "flex" }} xs={12}>
              <Button
                sx={{
                  backgroundColor: "secondary.main",
                  width: "80%",
                  margin: "0 auto",
                  height: 45,
                  borderRadius: 0,
                }}
                id="button"
                type="submit"
                variant="contained"
              >
                SEND
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};
