import { useFormik } from "formik";
import { ButtonBack } from "../../common/buttonBack/ButtonBack";
import { Register } from "./Register";
import * as Yup from "yup";
import { useState } from "react";
import { db, register } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

export const RegisterContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickshowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  let valoresIniciales = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    rol:"customer"
  };
  const navigate = useNavigate();
  const onSubmit = async(data) => {
    console.log( data)
    let res = await register(data)
    res?navigate("/login"):alert("Email ya registrado")
    let dataDB = {
      email: data.email,
      displayName: data.name,
      displaylastName: data.lastName,
      phone: data.phone,
      rol: data.rol,
    };
    const userCollection =collection(db,"users")
    addDoc(userCollection, dataDB);
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: valoresIniciales,
      validationSchema: Yup.object({
        name: Yup.string().required("Ingrese su nombre"),
        lastName: Yup.string().required("Ingrese su apellido"),
        phone: Yup.number().required("Ingrese un telefono"),
        email: Yup.string()
          .email("Ingrese un email valido")
          .required("Ingrese un email"),
        password: Yup.string().required("Ingrese una contraseña"),
        confirmPassword: Yup.string().required(
          "Ingrese nuevamente la contraseña"
        ),
      }),
      onSubmit: onSubmit,
    });
  return (
    <>
      <ButtonBack />
      <Register
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        values={values}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        showConfirmPassword={showConfirmPassword}
        handleClickshowConfirmPassword={handleClickshowConfirmPassword}
        handleMouseDownConfirmPassword={handleMouseDownConfirmPassword}
      />
      ;
    </>
  );
};
