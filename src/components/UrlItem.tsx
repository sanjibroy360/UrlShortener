import { useState } from "react";
import { UrlPair } from "../Types/type";
import { ClipboardIcon, CheckIcon, TrashIcon } from "../Icons";

type UrlItemProps = {
  url: UrlPair;
};

export default function UrlItem({ url }: UrlItemProps) {
  const [isCopied, setIsCopied] = useState<string | null>(null);
  const fullShortUrl = `short.url/${url.short_code}`;

  const onDelete = (urlId: string) => {};

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(id);
    setTimeout(() => setIsCopied(null), 2000);
  };

  return (
    <li className="grid grid-cols-3 items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition gap-6">
      <div className="truncate">
        <span className="text-xs text-gray-500">Original URL</span>
        <p className="text-sm text-gray-800 truncate">{url.long_url}</p>
      </div>

      <div>
        <span className="text-xs text-gray-500">Short URL</span>
        <p className="text-sm font-medium text-indigo-600 truncate">
          <a
            href={fullShortUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {fullShortUrl}
          </a>
        </p>
      </div>

      <div className="flex space-x-4 justify-end">
        <button
          onClick={() => copyToClipboard(fullShortUrl, url.id)}
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
