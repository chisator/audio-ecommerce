import { useFormik } from "formik";
import { Checkout } from "./Checkout";
import * as Yup from "yup";
export const CheckoutContainer = () => {
  let valoresIniciales = {
    name: "",
    email: "",
    phone: "",
    address: "",
    code: "",
    city: "",
    country: "",
    payMethod: "",
  };
  const checkout = (data) => {
    console.log(data);
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: valoresIniciales,
      validationSchema: Yup.object({
        name: Yup.string().required("Ingrese un email"),
        email: Yup.string()
          .email("Ingrese un email valido")
          .required("Ingrese un email valido"),
        phone: Yup.number().required("Ingrese un phone"),
        address: Yup.string().required("Ingrese un phone"),
        code: Yup.number().required("Ingrese un phone"),
        city: Yup.number().required("Ingrese un phone"),
        country: Yup.number().required("Ingrese un phone"),
        payMethod: Yup.number().required("Ingrese un phone"),
      }),
      onSubmit: checkout,
    });
  return (
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleBlur={handleBlur}
      errors={errors}
      touched={touched}
      values={values}
    />
  );
};
