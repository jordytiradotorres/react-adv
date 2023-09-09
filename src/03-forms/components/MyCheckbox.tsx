import { ErrorMessage, useField } from "formik";

interface IMyCheckboxProps {
  label?: string;
  name: string;
}

export const MyCheckbox = ({ label, ...props }: IMyCheckboxProps) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
