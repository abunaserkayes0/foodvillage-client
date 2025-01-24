import InputField from "../Atoms/InputField";
import { useForm } from "react-hook-form";
import TextArea from "../Atoms/TextArea";
import { url } from "../../../utils/fetchurl";
import { toast } from "react-toastify";

export default function AddService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const {
      productDescription,
      serviceDescription,
      serviceName,
      servicePrice,
      serviceType,
    } = data;
    const newService = {
      productDescription,
      serviceDescription,
      serviceName,
      servicePrice,
      serviceType,
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
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Something went wrong");
        }
      });
  };

  return (
    <div className="bg-stone-200 rounded-lg p-20">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <InputField
              labelText="Service Name"
              inputType="text"
              name="serviceName"
              placeholder="Service Name"
              register={register}
              validationRules={{
                required: "Service Name is required",
              }}
            />
            {errors.serviceName && (
              <p className="text-red-400 my-1">{errors.serviceName.message}</p>
            )}
          </div>
          <div>
            <InputField
              labelText="Service Price"
              inputType="text"
              name="servicePrice"
              placeholder="Service Price"
              register={register}
              validationRules={{
                required: "Service Price is required",
              }}
            />
            {errors.servicePrice && (
              <p className="text-red-400 my-1">{errors.servicePrice.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <InputField
              labelText="Service Description"
              inputType="text"
              name="serviceDescription"
              placeholder="Service Description"
              register={register}
              validationRules={{
                required: "Service Description is required",
              }}
            />
            {errors.serviceDescription && (
              <p className="text-red-400 my-1">
                {errors.serviceDescription.message}
              </p>
            )}
          </div>
          <div>
            <InputField
              labelText="Service Type"
              inputType="text"
              name="serviceType"
              placeholder="Service Type"
              register={register}
              validationRules={{
                required: "Service Type is required",
              }}
            />
            {errors.serviceType && (
              <p className="text-red-400 my-1">{errors.serviceType.message}</p>
            )}
          </div>
        </div>

        <div>
          <TextArea
            labelText="Product Description"
            name="productDescription"
            placeholder="Enter the product description"
            register={register}
            validationRules={{
              required: "Product Description is required",
            }}
            rows={6}
            cols={60}
          />

          {errors.productDescription && (
            <p className="text-red-400 my-1">
              {errors.productDescription.message}
            </p>
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
  );
}
77;
