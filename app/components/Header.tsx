"use client";

import { Category } from "../../types";

interface HeaderProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export default function Header({ selected, onSelect }: HeaderProps) {
  const categories: Category[] = ["ALL", "GOODS", "CLOTHES", "COSMETICS"];

  return (
    <>
      {/* 데스크톱 네비게이션 - 왼쪽 고정 */}
      <nav className="fixed left-0 top-0 h-full w-[340px] bg-white z-[60] hidden lg:flex flex-col px-[45px] py-[100px]">
        <h1 
            className="text-[80px] font-semibold text-black leading-none mb-[132px] cursor-pointer" 
            style={{ 
              letterSpacing: '-0.04em'
            }}
          >
            WISH
        </h1>
        
        {/* 버튼들이 고정된 위치에 있도록 absolute/fixed 중복 제거 */}
        <div className="flex flex-col gap-[30px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className="text-[32px] font-regular text-left transition-opacity cursor-pointer"
              style={{  letterSpacing: '-0.04em', opacity: selected === cat ? 1 : 0.4 }}
            >
              {cat}
            </button>
          ))}
        </div>
        </nav>

      {/* 모바일 헤더 - 상단 고정 */}
      <div className="lg:hidden sticky top-0 bg-white z-50 flex flex-col gap-[60px] px-[45px] py-10">
        <h1 
          className="text-[42px] font-medium text-black"
          style={{ letterSpacing: '-0.04em' }}
        >
          WISH
        </h1>

        <div className="flex flex-row justify-start gap-[53px] overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className="text-left text-[20px] font-medium whitespace-nowrap bg-transparent p-0 border-none cursor-pointer transition-opacity"
              style={{
                letterSpacing: '-0.04em',
                color: selected === cat ? '#000000' : '#000000',
                opacity: selected === cat ? 1 : 0.4,
                outline: 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}