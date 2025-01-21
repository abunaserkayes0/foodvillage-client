export default function InputField({ labelText, inputType, placeholder,register,name,validationRules }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelText}</span>
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        {...register(name,validationRules)}
        className="input input-bordered"
      />
    </div>
  );
}
