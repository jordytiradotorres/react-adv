import { ErrorMessage, useField } from "formik";

interface IMyTextInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "checkbox";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: IMyTextInputProps) => {
  // const [field, meta] = useField(props);
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
