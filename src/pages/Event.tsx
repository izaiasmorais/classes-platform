import { useParams } from "react-router-dom";
import { Stand } from "../components/Blank/Stand";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 gap-4 max-w-[1460px] my-8 mx-auto ">
        {slug ? <Video lessonSlug={slug} /> : <Stand />}
        <SideBar />
      </main>
    </div>
  );
}
