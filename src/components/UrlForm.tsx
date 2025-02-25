import { useState, useRef } from "react";

export default function UrlForm() {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      setIsError(true);
      return false;
    }
  };

  const onSubmit = (url: string) => {};

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      const trimmedUrl = inputUrl.trim();
      if (isValidUrl(trimmedUrl)) return;

      onSubmit(trimmedUrl);
      setInputUrl("");
      inputRef.current?.focus();
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          ref={inputRef}
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          placeholder="Paste your long URL here"
          className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        />
        {isError && (
          <p className="absolute -bottom-6 left-0 text-sm text-red-600">
            Please enter a valid URL
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm cursor-pointer"
        >
          Shorten
        </button>
      </div>
    </div>
  );
}
