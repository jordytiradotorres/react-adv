import { ErrorMessage, useField } from "formik";

interface IMySelectProps {
  label: string;
  name: string;
  children: JSX.Element | JSX.Element[];
}

export const MySelect = ({ label, ...props }: IMySelectProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <select {...field} {...props}>
        {props.children}
      </select>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
