import { useState } from "react";
import { UrlPair } from "../Types/type";
import {
  ClipboardIcon,
  CheckIcon,
  TrashIcon,
  ArrowSquareOutIcon,
} from "../Icons";
import { useUrls } from "../hooks/useUrls";

type UrlItemProps = {
  url: UrlPair;
};

export default function UrlItem({ url }: UrlItemProps) {
  const { deleteUrl } = useUrls();
  const [isCopied, setIsCopied] = useState<string | null>(null);

  const onDelete = (urlShortCode: string) => {
    deleteUrl(urlShortCode);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(id);
    setTimeout(() => setIsCopied(null), 2000);
  };

  return (
    <li className="grid grid-cols-3 items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition gap-6">
      <div className="truncate">
        <p className="text-sm text-gray-800 truncate">{url.long_url}</p>
      </div>

      <div>
        <p className="text-sm font-medium text-indigo-600 truncate">
          <a
            href={url.shortened_url}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {url.shortened_url}
          </a>
        </p>
      </div>

      <div className="flex space-x-4 justify-end">
        <a
          href={url.shortened_url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-gray-400 hover:text-indigo-600 cursor-pointer"
        >
          <ArrowSquareOutIcon />
        </a>
        <button
          onClick={() => copyToClipboard(url.shortened_url, url.id)}
          className="text-gray-400 hover:text-indigo-600 cursor-pointer"
        >
          {isCopied === url.id ? <CheckIcon /> : <ClipboardIcon />}
        </button>
        <button
          onClick={() => onDelete(url.id)}
          className="text-gray-400 hover:text-red-600 cursor-pointer"
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
}
