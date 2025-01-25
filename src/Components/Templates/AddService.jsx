import InputField from "../Atoms/InputField";
import { useForm } from "react-hook-form";
import TextArea from "../Atoms/TextArea";
import { url } from "../../../utils/fetchurl";
import { toast } from "react-toastify";
import BreadcrumbBanner from "../Atoms/BreadcrumbBanner";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AddService() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const foods = useLoaderData();
  const foodsLen = foods.length;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { img, description, title, price, serviceType, details, name } = data;
    const newService = {
      email: user.email,
      img,
      description,
      title,
      price,
      serviceType,
      food_id: String(foodsLen),
      facility: [
        {
          name: name,
          details: details,
        },
      ],
    };
    fetch(`${url}/foods`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((result) => {
        const { insertedId } = result;
        if (insertedId) {
          toast.success("Service Added Successfully");
          reset();
          navigate("/");
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Something went wrong");
        }
      });
  };

  return (
    <>
      <BreadcrumbBanner
        title="Add Service"
        imgUrl="https://res.cloudinary.com/dhjkntuy2/image/upload/v1737130541/FoodVillage/others/bg-two_bfqesk.png"
        className="w-full h-auto"
      />
      <div className="bg-stone-200 rounded-lg p-20">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <InputField
                labelText="Service Title"
                inputType="text"
                name="title"
                placeholder="Service Title"
                register={register}
                validationRules={{
                  required: "Service Title is required",
                }}
              />
              {errors.title && (
                <p className="text-red-400 my-1">{errors.title.message}</p>
              )}
            </div>
            <div>
              <InputField
                labelText="Price"
                inputType="text"
                name="price"
                placeholder="Service Price"
                register={register}
                validationRules={{
                  required: "Service Price is required",
                }}
              />
              {errors.price && (
                <p className="text-red-400 my-1">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="my-4">
              <InputField
                labelText="Image"
                name="img"
                placeholder="Enter the Image"
                register={register}
                validationRules={{
                  required: "image is required",
                }}
                rows={6}
                cols={60}
              />

              {errors.img && (
                <p className="text-red-400 my-1">{errors.img.message}</p>
              )}
            </div>
            <div>
              <h2>Facility</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <InputField
                    labelText="Name"
                    inputType="text"
                    name="name"
                    placeholder="Facility Name"
                    register={register}
                    validationRules={{
                      required: "Facility is required",
                    }}
                  />
                  {errors.name && (
                    <p className="text-red-400 my-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <InputField
                    labelText="Details"
                    inputType="text"
                    name="details"
                    placeholder="Facility Details"
                    register={register}
                    validationRules={{
                      required: "Facility Details is required",
                    }}
                  />
                  {errors.details && (
                    <p className="text-red-400 my-1">
                      {errors.details.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <TextArea
              className="text-lg"
              labelText="Service Description"
              name="description"
              placeholder="Service Description"
              register={register}
              validationRules={{
                required: "Service Description is required",
              }}
              rows={6}
              cols={60}
            />
            {errors.description && (
              <p className="text-red-400 my-1">{errors.description.message}</p>
            )}
          </div>

          <div className="flex items-center justify-center text-xl">
            <button
              className="btn w-1/4 bg-red-500 text-white hover:bg-red-600 px-6 py-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
