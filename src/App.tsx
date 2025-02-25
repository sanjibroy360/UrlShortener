import { useEffect, useState } from "react";
import { UrlPair } from "./Types/type";
import { mockUrls } from "./mockData";
import lazyLoad from "./utils/lazyLoad";

const HeroSection = lazyLoad(()=> import("./components/HeroSection"))
const UrlForm = lazyLoad(() => import("./components/UrlForm"));
const UrlList = lazyLoad(() => import("./components/UrlList"));

export default function UrlShortener() {
  const [urls, setUrls] = useState<UrlPair[]>([]);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = () => {
    setUrls(mockUrls);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <HeroSection />

      <main className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <UrlForm />
        <UrlList urls={urls} />
      </main>
    </div>
  );
}
