import { UrlPair } from "./Types/type";

export const mockUrls: UrlPair[] = [
  {
    id: "1",
    long_url:
      "https://www.example.com/very/long/path/to/some/resource/with/many/parameters?param1=value1&param2=value2",
    short_code: "abc123",
    createdAt: new Date("2025-02-20"),
  },
  {
    id: "2",
    long_url:
      "https://www.verylongdomainname.com/blog/2025/02/how-to-create-effective-url-shorteners-and-why-they-matter-for-marketing",
    short_code: "mkt5g7",
    createdAt: new Date("2025-02-21"),
  },
  {
    id: "3",
    long_url:
      "https://www.github.com/username/project-repository/blob/main/src/components/UrlShortener.tsx",
    short_code: "gh78k9",
    createdAt: new Date("2025-02-22"),
  },
];
