import { Form, Formik } from "formik";
import formJSON from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: string | number | boolean } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 1,
        "Debe de tener 5 caracteres"
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Email tiene un formato invalido");
    }
  }

  requiredFields[input.name] = schema;
}

const validateonSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validateonSchema}
      >
        {({ handleReset }) => (
          <Form>
            {formJSON.map(({ label, name, type, placeholder, options }) => {
              if (type === "text" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect label={label} name={name}>
                    <>
                      <option value="">Selected option</option>
                      {options?.map(({ id, description }) => (
                        <option key={id} value={id}>
                          {description}
                        </option>
                      ))}
                    </>
                  </MySelect>
                );
              }

              throw new Error(`El type ${type} no es soportado`);
            })}

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
