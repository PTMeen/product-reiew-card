const Btn = ({ children, leftDecor }) => {
  return (
    <button className="flex justify-center items-center bg-darkCyan-500 p-4 w-full rounded-lg text-lg text-white">
      {leftDecor}
      <p className="ml-2">{children}</p>
    </button>
  );
};
export default Btn;
