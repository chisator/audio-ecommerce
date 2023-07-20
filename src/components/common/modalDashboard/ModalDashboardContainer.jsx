import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalDashboard } from "./ModalDashboard";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
export const ModalDashboardContainer = ({
  open,
  data,
  disabled,
  handleClose,
  setChangesProducts,
}) => {
  let valoresIniciales = {
    id: data.id,
    name: data.name,
    subName: data.subName,
    price: data.price,
    stock: data.stock,
    new: data.new,
    category: data.category,
    description: data.description,
    features: data.features,
    includes: data.includes,
    image: data.image,
  };
  const onSubmit = (x) => {
    let obj = {
      ...x,
    };
    console.log(obj);
    updateDoc(doc(db, "products", data.id), obj);
    setChangesProducts(true);
    handleClose();
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: valoresIniciales,
      validationSchema: Yup.object({
        name: Yup.string().required(""),
        subName: Yup.string().required(""),
        price: Yup.number().required(""),
        stock: Yup.number().required(""),
        new: Yup.boolean().required(""),
        category: Yup.string().required(""),
        description: Yup.string().required(""),
        features: Yup.string().required(""),
        includes: Yup.string().required(""),
        image: Yup.string().required(""),
      }),
      onSubmit: onSubmit,
    }
  );
  let props = {
    open,
    data,
    disabled,
    handleClose,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
  };
  return (
    <>
      <ModalDashboard {...props} />
    </>
  );
};
