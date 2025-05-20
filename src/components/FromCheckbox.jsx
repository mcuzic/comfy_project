const FromCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control grid place-items-center gap-y-2">
      <div className="grid">
        <label htmlFor={name} className="label curser-pointer">
          <span className="label-text capitalize">{label}</span>
        </label>
      </div>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FromCheckbox;
