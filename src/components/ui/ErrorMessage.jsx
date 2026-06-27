const ErrorMessage = ({ message }) => {
  return (
    <div className="rounded-xl bg-red-100 p-6 text-center text-red-700">
      {message}
    </div>
  );
};

export default ErrorMessage;