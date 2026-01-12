import { Item } from "../../types";

export default function ItemCard({ item, onClick }: { item: Item; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col cursor-pointer group bg-white w-full h-full"
    >
      {/* 1. 이미지 영역 */}
      <div className="relative aspect-[600/688] bg-[#EFEFEF] overflow-hidden">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      
      {/* 2. 텍스트 영역: pt-5 (위쪽 내부 여백 20px) 적용 */}
      {/* globals.css 수정 후에는 이 부분이 정확하게 벌어집니다 */}
      <div className="pt-[20px] px-[10px] flex flex-col gap-2 px-1"> 
        <div 
          className="text-[20px] font-medium text-black leading-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          {item.title}
        </div>
        <div 
          className="text-gray-400 mt-1 text-[14px] text-[#9B9B9B] text-black leading-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          {item.categoryLabel}
        </div>
      </div>
    </div>
  );
}