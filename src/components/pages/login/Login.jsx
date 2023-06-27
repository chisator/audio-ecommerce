import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import "./Login.css"
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { ButtonBack } from "../../common/buttonBack/ButtonBack";

export const Login = ({
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
  values,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  return (
    <>
      <ButtonBack />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          m: "0px auto",
          p: "40px",
          width: { lg: "40%", md: "50%", xs: "100%" },
          height: "340px",
          backgroundColor: "primary.blanco",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight={550}>
          LOGIN
        </Typography>
        <form className="form-login" action="" onSubmit={handleSubmit}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <TextField
            autoComplete="username"
              placeholder="ejemplo@gmail.com"
              className=""
              id="standard-basic"
              label="Email"
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

          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel
              color="secondary"
              error={touched.password && errors.password ? true : false}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              autoComplete="current-password"
              name="password"
              color="secondary"
              placeholder="suContraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password ? true : false}
              label="Password"
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
              color={touched.password && errors.password ? "#d32f2f" : false}
            >
              {touched.password ? errors.password : null}
            </Typography>
          </FormControl>

          <br />
          <Button
            sx={{
              backgroundColor: "secondary.main",
              width: "50%",
              borderRadius: 0,
            }}
            id="button"
            type="submit"
            variant="contained"
          >
            continue
          </Button>
        </form>
      </Box>
    </>
  );
};
