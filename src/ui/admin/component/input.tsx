export interface InputProp {
  title: string;
  placeHolder: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  styleProps?: string;
  disable?: boolean;
  type?: string;
  key?: string;
  error?: string;
}
export const InputComponent: React.FC<InputProp> = (props: InputProp) => {
  return (
    <div className={`${props.styleProps}`}>
      <label htmlFor={props.key} className="block text-sm font-medium text-gray-700">
        {props.title}
      </label>
      <input
        type={props.type || 'text'}
        name={props.key}
        id={props.key}
        disabled={props.disable}
        onChange={onChangeInput(props)}
        placeholder={props.placeHolder}
        required={props.required}
        value={props.value}
        className="mt-1 block w-[92%] rounded-md border-gray-300 shadow-sm focus:border-dark-purple focus:ring-dark-purple sm:text-sm"
      />
      <div
        className={`${
          props.error === undefined ? 'hidden' : 'block text-sm font-medium text-red-500'
        }`}
      >
        {props.error}
      </div>
    </div>
  );
};

const onChangeInput = (props: InputProp) => (e: React.ChangeEvent<HTMLInputElement>) => {
  if (props.onChange) {
    props.onChange(e.target.value);
  }
};
