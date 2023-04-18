interface ErrorMessageProps {
  error: string;
}
export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div>
      <p className="text-center text-red-500">{error}</p>
    </div>
  );
}
