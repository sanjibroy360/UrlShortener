import { UrlPair } from "../Types/type";
import lazyLoad from "../utils/lazyLoad";
import { useUrls } from "../hooks/useUrls";
import Loader from "./common/Loader";

const UrlItem = lazyLoad(() => import("./UrlItem"));
const EmptyState = lazyLoad(() => import("./EmptyState"));

export default function UrlList() {
  const { urls, isLoading, error } = useUrls();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to fetch URLs!</p>;
  }

  if (!urls?.length) {
    return <EmptyState />;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-4 py-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Shortened URLs</h2>
      </div>
      <div className="grid grid-cols-3 items-center text-center p-4 border-b border-gray-300 bg-gray-100">
        <h3 className="text-xs font-medium text-gray-500 text-left uppercase p-2">
          Original URL
        </h3>
        <h3 className="text-xs font-medium text-gray-500 text-left uppercase p-2">
          Short URL
        </h3>
        <h3 className="text-xs font-medium text-gray-500 text-right uppercase pr-4">
          Actions
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {urls.map((url: UrlPair) => (
          <UrlItem key={url.short_code} url={url} />
        ))}
      </ul>
    </div>
  );
}
