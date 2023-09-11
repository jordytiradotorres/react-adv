import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener minimo 2 caracteres")
            .max(15, "Debe tener maximo 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("email no tiene un formato valido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "minimo 6 caracteres")
            .required("requerido"),
          // Yup.ref, que hace referencia al password1
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            {/* <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="span" /> */}
            <MyTextInput label="Name" name="name" placeholder="Fernando" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="jordy@gmail.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="******"
            />
            <MyTextInput
              label="Repeat Password"
              name="password2"
              type="password"
              placeholder="******"
            />

            <button type="button" onClick={handleReset}>
              Reset
            </button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
