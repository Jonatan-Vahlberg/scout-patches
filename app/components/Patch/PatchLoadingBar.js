"use client";

const PatchLoadingBar = () => {
    //TODO: get user spesific data from firebase
  return (
    <div className="flex w-full">
      <div className="relative border-2 border-sweden-dark h-5 w-full rounded-full">
        <div className="absolute top-0 bottom-0 left-0 bg-sweden-dark  rounded-full w-3/12 " />
      </div>
    </div>
  );
};

export default PatchLoadingBar;
