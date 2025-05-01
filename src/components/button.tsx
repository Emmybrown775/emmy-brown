export default function CustomButton({ size = 1, text = "", className = "" }) {
  const getPaddingClass = () => {
    switch (size) {
      case 1:
        return "px-4 py-3";
      case 2:
        return "px-6 py-5";
      case 3:
        return "px-8 py-6";
      case 4:
        return "px-12 py-8";
      default:
        return "px-4 py-3";
    }
  };

  return (
    <div className={`relative ${className} group text-sm font-mono text-text`}>
      <div
        className={`absolute ${getPaddingClass()} py-2 rounded bg-secondary opacity `}
      >
        <h1 className="font-bold invisible">{text}</h1>
      </div>
      <button
        className={`relative ${getPaddingClass()} py-2 bg-background rounded
          border border-secondary
                           group-hover:-translate-y-1
                           group-hover:-translate-x-1
                           active:translate-y-0
                           transition-all duration-200`}
      >
        <h1 className="font-bold">{text}</h1>
      </button>
    </div>
  );
}
