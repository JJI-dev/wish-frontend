"use client";

import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Item } from "../../types";

export default function ItemModal({ item, onClose }: { item: Item; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 배경 스크롤 차단
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex justify-end">
      {/* 배경 Dim (블러 효과) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* 모달 패널: 위아래 배치 구조 */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative z-[100000] w-full lg:w-[550px] h-full bg-white shadow-2xl flex flex-col overflow-y-auto no-scrollbar lg:custom-scrollbar"
      >
        {/* 뒤로가기 버튼: 사진 위에 둥둥 떠 있는 스타일 */}
        <button 
          onClick={onClose} 
          className="absolute top-6 left-6 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          ←
        </button>

        {/* [위] 사진 영역: 고정 높이 또는 비율 설정 */}
        <div className="w-full aspect-[4/5] lg:h-[460px] h-[400px] flex-none bg-[#F5F5F5] overflow-hidden">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            /* object-cover로 사진이 영역에 꽉 차게 설정 */
            className="w-full h-full object-cover" 
          />
        </div>

        {/* [아래] 정보 영역 */}
        <div className="p-10 lg:px-15 lg:pt-8 lg:pb-0 flex flex-col flex-1 bg-white">
          <div className="mb-12 lg:mb-5">
            <h2 className="text-4xl font-bold mb-5 tracking-tighter uppercase">
              {item.title}
            </h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-8 ml-1">
              {item.categoryLabel}
            </p>

            <div className="mt-50 lg:mt-10 flex flex-col gap-01">
              <span className="text-[14px] font-bold leading-relaxed text-gray-400 uppercase tracking-wides">
                갖고 싶은 이유
              </span>
              <p className="text-xl text-black leading-relaxed font-medium">
                {item.reason}
              </p>
            </div>
          </div>

          {/* 하단 상세 정보: Price, Link, Get? */}
          <div className="mt-auto flex flex-col border-t border-black">
            {/* Price */}
            <div className="flex justify-between items-center py-5 border-b border-gray-100">
              <span className="text-xl font-medium text-black text-opacity-50">Price</span>
              <span className="text-2xl font-bold">
                {Number(item.price).toLocaleString()}원
              </span>
            </div>

            {/* Link */}
            <div className="flex justify-between items-center py-5 border-b border-gray-100">
              <span className="text-xl font-medium text-black text-opacity-50">Link</span>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-black hover:opacity-50 transition-opacity"
              >
                +
              </a>
            </div>

            {/* Get? */}
            <div className="flex justify-between items-center py-5">
              <span className="text-xl font-medium text-black text-opacity-50">Get?</span>
              <span className="text-xl font-black uppercase tracking-widest">
                {item.isGot ? "YES" : "NO"}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}