type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="mt-10 font-semibold text-center text-red-400">
      {message}
    </div>
  );
};

export default ErrorMessage;
