import clsx from 'clsx';

type CustomTextFieldProps = {
  label: string;
  isPassword?: boolean;
  value: string;
  className?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  isPassword,
  setValue,
  value,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col text-gray-400 py-2', className)}>
      <label htmlFor="">{label}</label>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
        type={isPassword ? 'password' : 'text'}
      />
    </div>
  );
};
export default CustomTextField;
