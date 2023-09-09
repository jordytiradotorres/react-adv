import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";
import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene un formato valido")
            .required("Requerido"),
          // tiene que ser un valor booleano, y ese valor booleano tiene que
          // estar en la cantidad de elementos que coloco dentro de esa arreglo
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          // la opcion it-jr no esta permitida
          jobType: Yup.string()
            .notOneOf(["it-jr", "Esta opcion no es permitida"])
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="job@google.com"
            />
            <MySelect label="Job Title" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
