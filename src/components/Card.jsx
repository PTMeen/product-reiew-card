const Card = ({ children }) => {
  return (
    <div className="rounded-lg overflow-hidden min-h-[450px] w-[90%] max-w-[650px] mt-16 lg:mt-0  bg-white grid lg:grid-cols-2">
      {children}
    </div>
  );
};
export default Card;
