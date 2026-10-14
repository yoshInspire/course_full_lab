"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-container">
      <h2>Что-то пошло не так!</h2>
      <p className="error-message">{error.message}</p>
      <button onClick={() => reset()}>Попробовать снова</button>
    </div>
  );
}
