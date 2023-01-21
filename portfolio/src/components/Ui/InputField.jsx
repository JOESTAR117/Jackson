const InputField = ({
  id,
  onChange,
  onBlur,
  hasError,
  label,
  isTextArea = false,
}) => {
  const commomProps = {
    id,
    name: id,
    onChange: (e) => onChange(e.target.value),
    onBlur: () => onBlur(true),
  };

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {!isTextArea && <input {...commomProps} type="text" />}

      {isTextArea && <textarea {...commomProps} rows="10" />}
      
      {hasError && <span className="error">Oops! o campo está incorreto</span>}
    </div>
  );
};

export default InputField;
