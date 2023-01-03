import clsx from 'clsx';
import { CircularProgressIndicator } from '../../../../utils/circular_progress_indicator';

export const ButtonComponent = (props: any) => {
  const { id, title, isLoading, className, ...rest } = props;
  return (
    <button
      id={id}
      className={clsx(
        `text-white hover:cursor-pointer brightness-90 hover:brightness-100 font-bold uppercase text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ` +
          className,
      )}
      type="button"
      {...rest}
    >
      {isLoading ? <CircularProgressIndicator /> : title}
    </button>
  );
};
