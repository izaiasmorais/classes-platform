import { VoidIcon } from "../AssetsTsx/VoidIcon";


export function Loading() {
  return (
    <div
      className="flex-1 w-[1200px] bg-gray-700 h-[610px] flex items-center justify-center
    gap-12 flex-col"
    >
      <div>
        <VoidIcon />
      </div>
      <div className="flex gap-2">
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
