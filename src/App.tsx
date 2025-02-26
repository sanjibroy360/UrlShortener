import lazyLoad from "./utils/lazyLoad";

const HeroSection = lazyLoad(() => import("./components/HeroSection"));
const UrlForm = lazyLoad(() => import("./components/UrlForm"));
const UrlList = lazyLoad(() => import("./components/UrlList"));

export default function UrlShortener() { 
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <HeroSection />

      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <UrlForm />
        <UrlList />
      </main>
    </div>
  );
}
