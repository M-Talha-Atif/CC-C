export function LoadingSpinner({ size = "md", text = "Loading..." }) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "md":
        return "w-8 h-8";
      case "lg":
        return "w-12 h-12";
      default:
        return "w-8 h-8";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div
        className={`${getSizeClasses()} border-4 border-gray-200 border-t-black rounded-full animate-spin mb-4`}
      />
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}
