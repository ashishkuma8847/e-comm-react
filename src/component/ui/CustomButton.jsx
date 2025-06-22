import { Loader2 } from "lucide-react"; 

const sizeMap = {
  md:"px-0 py-0",
  sm: "px-3 py-1 text-sm",
  lg: "px-5 py-2 text-base",
  xl: "px-6 py-3 text-lg",
};

const variantMap = {
  default:"text-white outline-none border-none",
  primary: "hover:bg-blue-700 text-white ",
  secondary: "bg-gray-800 hover:bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2",
};

const CustomButton = ({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  loading = false,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`inline-flex items-center  font-poppins justify-center  gap-2 rounded-md font-medium transition-all duration-200 
        ${sizeMap[size] || sizeMap.lg}
        ${variantMap[variant] || variantMap.primary}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}`}
    >
      {loading && <Loader2 className="animate-spin h-5 w-5" />}
      {!loading && LeftIcon && <LeftIcon className="h-5 w-5" />}
      <span>{children}</span>
      {!loading && RightIcon && <RightIcon className="h-5 w-5" />}
    </button>
  );
};

export default CustomButton;
