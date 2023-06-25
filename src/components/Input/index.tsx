"use client";

export interface IIncrement {
  onChange?: any;
  type: string;
  name: string;
  onBlur?: any;
  value: string;
  placeholder?: string;
  error?: string;
}

const Input: React.FC<IIncrement> = ({
  onChange,
  type,
  name,
  onBlur,
  value,
  placeholder,
  error,
}) => {
  return (
    <div>
      <input
        onChange={onChange}
        type={type}
        name={name}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
