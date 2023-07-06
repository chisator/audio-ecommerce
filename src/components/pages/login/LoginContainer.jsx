import { useFormik } from "formik";
import * as Yup from "yup";
import { Login } from "./Login";
import { useState } from "react";
import { login, loginGoogle } from "../../../firebaseConfig";
import { loginRedux } from "../../../store/authSlice";
import { useDispatch } from "react-redux";


export const LoginContainer = () => {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let valoresIniciales = {
    password: "",
    email: "",
  };
  const onSubmit = async(data) => {
    let res =await login(data);
    dispatch(loginRedux(res.user));
  };
  const ingresarConGoogle = async()=>{
    let res = await loginGoogle();
    dispatch(loginRedux(res.user));
  }

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: valoresIniciales,
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Ingrese un email valido")
          .required("Ingrese un email"),
        password: Yup.string().required("Ingrese su contraseña"),
      }),
      onSubmit: onSubmit,
    });
  return (
    <Login
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleBlur={handleBlur}
      errors={errors}
      touched={touched}
      values={values}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      ingresarConGoogle={ingresarConGoogle}
    />
  );
};
