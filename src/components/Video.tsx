import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  Image,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { Loading } from "./Blank/Loading";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return <Loading />;
  }

  return (
    <div className="flex-1 max-w-[1200px]">
      <div className="rounded-[4px] max-h-[610px] bg-gray-500">
        <div className="max-w-[1100px] aspect-video">
          <Player>
            <Youtube
              videoId={data?.lesson.videoId}
              key={data?.lesson.videoId}
            />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://discord.gg/5RhTYxeh"
              target="_blank"
              className="p-4 text-sm bg-purple-500 flex items-center rounded font-bold
              uppercase gap-2 justify-center hover:bg-purple-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a
              href=""
              className="p-4 text-sm border border-blue-500 flex items-center rounded 
              font-bold uppercase gap-2 justify-center text-blue-500 hover:bg-blue-500
              hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            target="_blank"
            href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch
          gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-purple-500 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch
          gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-purple-500 h-full p-6 flex items-center">
              <Image size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
