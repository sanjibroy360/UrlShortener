import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { useUrls } from "../hooks/useUrls";
import * as URI from "uri-js";
import lazyLoad from "../utils/lazyLoad";

const LoadingButton = lazyLoad(() => import("./common/LoadingButton"));

export default function UrlForm() {
  const [urlInput, setUrlInput] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { createUrl, isLoading } = useUrls();

  const removeTrailingSlash = (url: string): string => {
    return url.endsWith("/") ? url.slice(0, -1) : url;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      if (!url.length) {
        return false;
      }
      const parsed = URI.parse(url);
      const { scheme, host } = parsed;

      if (!scheme || !host) {
        return false;
      }
      const normalizedHost = host.startsWith("www.") ? host.slice(4) : host;

      if (!normalizedHost?.includes(".")) {
        return false;
      }
      const reconstructedUrl = removeTrailingSlash(URI.serialize(parsed));

      if (reconstructedUrl !== url) {
        return false;
      }
      new URL(url);
      return true;
    } catch (error) {
      console.error(error);
      setHasError(true);
      return false;
    }
  };

  const submitUrl = (url: string) => {
    createUrl(url, {
      onSuccess: () => {
        setUrlInput("");
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      onError: (error: any) => {
        setHasError(true);
        setErrorMessage(String(error));
      },
    });
  };

  const normalizeUrl = (): string => {
    const trimmedUrl = urlInput.trim();

    if (
      !trimmedUrl ||
      trimmedUrl.startsWith("https://") ||
      trimmedUrl.startsWith("http://")
    ) {
      return trimmedUrl;
    }

    const defaultProtocol = "http://";
    const formattedUrl = defaultProtocol + trimmedUrl;
    setUrlInput(formattedUrl);
    return formattedUrl;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    let normalizedUrl = normalizeUrl();
    normalizedUrl = removeTrailingSlash(normalizedUrl);

    if (!isValidUrl(normalizedUrl)) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return setHasError(true);
    }

    submitUrl(normalizedUrl);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isLoading) {
      return;
    }
    setUrlInput(e.target.value);
    setErrorMessage("");
    setHasError(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-10 relative">
      <form
        className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          type="text"
          value={urlInput}
          onChange={handleInputChange}
          placeholder="Paste your long URL here"
          className={`flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 border-gray-300 ${
            hasError
              ? "focus:border-red-500 focus:ring-red-500"
              : "focus:border-indigo-500 focus:ring-indigo-500"
          }`}
        />
        {hasError && (
          <p className="absolute md:-bottom-6 -bottom-8 left-0 md:text-sm sm:text-sm text-xs text-red-600">
            {errorMessage ||
              `Please enter a valid URL, like "www.example.com/url"`}
          </p>
        )}
        {isLoading ? (
          <LoadingButton />
        ) : (
          <button
            type="submit"
            disabled={!urlInput.trim() || hasError}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm cursor-pointer disabled:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Shorten
          </button>
        )}
      </form>
    </div>
  );
}
