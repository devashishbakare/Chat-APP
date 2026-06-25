import { CircularSpinner } from "./CircularSpinner";
export const Processing = () => {
  return (
    <div className="h-full w-full bg-black bg-opacity-15 centerDiv p-2 rounded-md">
      <div className="h-[150px] w-[250px] bg-white flex flex-col items-center p-2 addShadow rounded-md">
        <span className="h-[50%] w-full text-center addFont">
          we are processing your request please wait
        </span>
        <span className="h-[50%] w-full centerDiv">
          <CircularSpinner />
        </span>
      </div>
    </div>
  );
};
