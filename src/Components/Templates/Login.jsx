import { useForm } from "react-hook-form";
import InputField from "../Atoms/InputField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMedia from "../Molecules/SocialMedia";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { url } from "../../../utils/fetchurl";

export default function Login() {
  const { signInUser, loading, setLoading } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data || {};
    signInUser(email, password)
      .then((result) => {
        const { email } = result.user;
        fetch(`${url}/jwt`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
          credentials: "include",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);

            result && navigate(state || "/");
            if (result) {
              toast.success("User Sign Successfully", {
                position: "bottom-right",
              });
              setLoading(false);
            }
          });
      })
      .catch((error) => {
        if (error) {
          toast.error(`${error}`, {
            position: "bottom-right",
          });
          setLoading(false);
        }
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-x-5 my-14">
      <div className="order-2">
        <img
          src="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737360348/FoodVillage/others/authentication_ofse3i.png"
          alt="login image is missing"
        />
      </div>
      <div className="card bg-base-100 max-w-lg shrink-0 shadow-2xl order-1">
        <div className="flex justify-center items-center py-5">
          <h2 className="font-bold text-3xl">Login</h2>
        </div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
            Have an account?
            <Link
              to="/register"
              className="label-text-alt link link-hover text-xl text-red-600 hover:text-red-500"
            >
              Register
            </Link>
          </label>
          <div className="form-control mt-6">
            <button
              disabled={loading}
              className="btn bg-red-500 text-white hover:bg-red-600 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
