export default function TextArea({
  labelText,
  placeholder,
  name,
  register,
  validationRules,
  rows = 4, 
  cols = 50,
}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelText}</span>
      </label>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        {...register(name, validationRules)}
        className="textarea textarea-bordered w-full"
      />
    </div>
  );
}
