import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
  // touched --> si ha sido tocado
  // getFieldProps --> metodo que me permite atacar exactamente el problema
  // de poner en todos los inputs onChange={handleChange} y onBlut={handleBlur}
  // getFieldProps tambien te establace el name, ejm: name="firstName"

  // getFieldProps, regresa un objeto en el cual esta colocandole el onChange
  // el onBlur, el value y el name
  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    // se va a disparar cuando el formulario tiene todas las reglas de
    // validacion aprobadas
    onSubmit: (values) => {
      console.log(values);
    },
    // validationSchema --> trabaja de la mano con Yup
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe de tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(10, "Debe de tener 10 caracteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .email("Email no tiene un formato valido")
        .required("Requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
