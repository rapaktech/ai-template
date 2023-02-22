import clsx from "clsx";

interface AdditionalTextAreaProps {
  id: string;
  label?: string;
  className?: string;
}

type TextAreaProps = React.ButtonHTMLAttributes<HTMLTextAreaElement> &
  AdditionalTextAreaProps;

export const Input: React.FC<TextAreaProps> = ({
  label,
  className,
  id,
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          className={clsx(
            "inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black hover:border-gray-300"
          )}
          {...props}
        />
      </div>
    </div>
  );
};
