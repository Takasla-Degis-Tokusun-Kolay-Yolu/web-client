export const SquareButton = ({ children, ...props }) => {
  return (
    <button
      className={
        "flex justify-center items-center rounded-lg bg-primary text-white px-4 py-4 text-sm font-semibold"
      }
      {...props}
    >
      {children}
    </button>
  );
}