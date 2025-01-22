import { Link } from "react-router-dom";
import InputField from "../Atoms/InputField";
import SocialMedia from "../Molecules/SocialMedia";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-x-5 my-14">
      <div className="order-2">
        <img
          src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737360348/FoodVillage/others/authentication_ofse3i.png"
          alt="Register image is missing"
        />
      </div>
      <div className="card bg-base-100 max-w-lg shrink-0 shadow-2xl order-1">
        <div className="flex justify-center items-center py-5">
          <h2 className="font-bold text-3xl">Register</h2>
        </div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            labelText="Name"
            inputType="name"
            placeholder="Enter Your Name"
            register={register}
            name="name"
            validationRules={{
              required: "name is required",
            }}
          />
          {errors?.name && (
            <p className="text-red-400">{errors.name.message}</p>
          )}
          <InputField
            labelText="Email"
            inputType="email"
            placeholder="Enter Your E-mail"
            register={register}
            name="email"
            validationRules={{
              required: "Email is required",
            }}
          />
          {errors?.email && (
            <p className="text-red-400">{errors.email.message}</p>
          )}
          <InputField
            labelText="Password"
            inputType="password"
            placeholder="Enter Your Password"
            register={register}
            name="password"
            validationRules={{
              required: "password is required",
            }}
          />
          {errors?.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}
          <SocialMedia />
          <label>
            Already Have an account?
            <Link
              to="/login"
              className="label-text-alt link link-hover text-xl text-red-600 hover:text-red-500"
            >
              Login
            </Link>
          </label>
          <div className="form-control mt-6">
            <button className="btn bg-red-500 text-white hover:bg-red-600 text-xl">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
