import { useForm } from "react-hook-form";
import "./example.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">
      <label className="hook__text">Name</label>
      <input
        type="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
    

<label className="hook__text">Description</label>
      <input
        type="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
    

      <label className="hook__text">Category</label>
      <input
        type="password"
        className="hook__input"
        {...register("password", { required: true })}
      />
  

      <label className="hook__text">Quantity</label>
      <input
        type="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      

<label className="hook__text">Price</label>
      <input
        type="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
     

      <button className="hook__button" type="submit">
        Submit
      </button>
      <button className="hook__button" type="cancel">
        Cancel
      </button>
    </form>
  );
}

export default LoginForm;
