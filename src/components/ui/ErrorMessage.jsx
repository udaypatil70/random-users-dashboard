const ErrorMessage = ({ message }) => {
  return (
    <div className="rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 to-pink-50 p-6 text-center">
      <p className="text-rose-700 font-semibold mb-2">⚠️ Error</p>
      <p className="text-rose-600 text-sm">{message}</p>
    </div>
  );
};

export default ErrorMessage;
