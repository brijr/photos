import ImageGrid from "@/components/image-grid";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="max-w-screen-xl m-auto md:p-6 px-0">
      <Header />
      <ImageGrid />
    </main>
  );
}
