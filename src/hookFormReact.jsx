import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./hookFormReact.css";

const schema = yup.object().shape({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  city: yup.string().required(),
});

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input {...register("firstName")} />
        <p className="error-message">{errors.firstName?.message}</p>
      </label>
      <label>
        Last Name:
        <input {...register("lastName")} />
        <p className="error-message">{errors.lastName?.message}</p>
      </label>
      <label>
        City:
        <input {...register("city")} />
        <p className="error-message">{errors.city?.message}</p>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ReactHookForm;
