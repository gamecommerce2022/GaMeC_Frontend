export const TextFieldComponent = (props: any) => {
  const { id, placeholder = '', label = '', type = 'text', ...rest } = props;

  return (
    <div
      className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-400 rounded`}
    >
      <label
        htmlFor={id}
        className={`text-xs text-gray-200 font-light placeholder-gray-400 px-2 pt-1.5`}
      >
        {label}
      </label>
      <input
        type={type}
        className={`w-full px-2 pb-1.5 text-white outline-none text-base font-light rounded-md border-none bg-transparent border-transparent focus:border-transparent focus:ring-0 `}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
