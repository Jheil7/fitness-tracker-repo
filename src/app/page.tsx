import Link from "next/link";

const mockURLs = [
  "https://t218rzeu95.ufs.sh/f/OfhVzXPrRMmKr4a1gUw2FDjI7UJCA3mZHWYVtNSb1Gxkivpo",
  "https://t218rzeu95.ufs.sh/f/OfhVzXPrRMmK1UsEKRMLCj0Hz6oiWuBMcw3blKhOvIfFy4eR",
  "https://t218rzeu95.ufs.sh/f/OfhVzXPrRMmKHghuAsjwS9tanrBQVNp7OgYu5oc0TbWXFf62",
  "https://t218rzeu95.ufs.sh/f/OfhVzXPrRMmKevt0x6DxyPHhOXju6AtU1gWd0bmDckzINa8L",
];
const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
