
const Checkbox = ({ 
    labelProps = {},
    children = "",
    size = "sm",
    className = "",
    ...props
    }) => {
    const sizes = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    };
    return(
        <div className="w-full flex gap-2">
        <input
          className={`
          peer relative appearance-none shrink-0 w-4 h-4 border-2  rounded-sm mt-1 
          focus:outline-none focus:ring-offset-0 focus:ring-1 
          disabled:border-steel-400 checked:border-0
          border-sweden-dark checked:border-transparent disabled:border-transparent
          bg-white checked:bg-sweden 
          focus:ring-sweden-dark
        disabled:bg-sweden-lightest disabled:cursor-not-allowed
            ${sizes[size]}
 
          ${className}`}
          type="checkbox"
          {...props}
        />
        <svg
          className={`
          absolute w-4 h-4 
          pointer-events-none 
          hidden peer-checked:block 
          stroke-white mt-1 
          outline-none
            ${sizes[size]}
          `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <label htmlFor={props.id} {...labelProps}>
          {children}
        </label>
      </div>
)};

export default Checkbox;
    