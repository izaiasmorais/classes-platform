import { ArrowCircleRight } from "phosphor-react";
import { ReactIcon } from "../AssetsTsx/ReatcIcon";

export function Stand() {
  return (
    <div
      className="flex-1 w-[1200px] bg-gray-700 h-[610px] flex items-center justify-center
    gap-12 flex-col"
    >
      <div>
        <ReactIcon />
      </div>
      <div className="flex gap-2">
        <h1 className="text-blue-500 font-bold text-2xl">
          Selecione uma aula ao lado
        </h1>
        <ArrowCircleRight size={32} color={"#81D8F7"} />
      </div>
    </div>
  );
}
