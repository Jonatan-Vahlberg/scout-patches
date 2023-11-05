import { FaCheck, FaLock } from "react-icons/fa";

const Loadingbar = ({
  classNameBorder = "",
  classNameBar = "",
  locked = false,
  height = 5,
  barWidth = 0,
  onLockClick = () => {},
}) => {
  const color = locked ? "sweden-lightest" : "sweden-dark";
  const percent = Math.round(barWidth);
  barWidth = locked ? "full" : barWidth;
  return (
    <div className="flex w-full my-3">
      <div
        className={`relative border-2 border-${color} h-${height} w-full rounded-full ${classNameBorder}`}
      >
        <div
          className={`
          absolute 
          top-0 bottom-0 left-0 
          bg-${color}  
          rounded-full transition-all duration-500
          ${classNameBar}`}
          style={{ width: `${barWidth}%` }}
        ></div>

        <div
          onClick={(e) => {
            if (!locked) return;
            e.stopPropagation();
            onLockClick();
          }}
          className={`absolute h-${height + 5} aspect-square rounded-full 
            ${percent === 100 ? "bg-sweden-dark" : "bg-sweden-light"} 
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            flex justify-center items-center border-white border-2 p-1`}
        >
          {locked && <FaLock className="text-white" size={10} />}
          {percent !== 100 && !locked && (
            <span className="text-white text-xs">{percent}%</span>
          )}
          {percent === 100 && !locked && (
            <FaCheck className="text-white" size={10} />
          )}
        </div>
      </div>
      <div className="display-none bg-sweden-dark border-sweden-dark" />
      <div className="display-none bg-sweden-lightest border-sweden-lightest" />
    </div>
  );
};

export default Loadingbar;
