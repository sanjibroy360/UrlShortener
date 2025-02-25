import { UrlPair } from "../Types/type";
import lazyLoad from "../utils/lazyLoad";

type UrlListProps = {
  urls: UrlPair[];
};

const UrlItem = lazyLoad(() => import("./UrlItem"));
const EmptyState = lazyLoad(() => import("./EmptyState"));

export default function UrlList({ urls }: UrlListProps) {
  if (!urls?.length) {
    return <EmptyState />;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-4 py-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">
          Shortened URLs
        </h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {urls.map((url) => (
          <UrlItem key={url.short_code} url={url} />
        ))}
      </ul>
    </div>
  );
}
