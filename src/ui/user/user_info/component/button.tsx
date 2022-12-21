export const ButtonComponent = (props: any) => {
  const { id, title, className, ...rest } = props;
  return (
    <button
      id={id}
      className={
        `text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ` +
        className
      }
      type="button"
      {...rest}
    >
      {title}
    </button>
  );
};
