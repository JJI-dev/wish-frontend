"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import ItemModal from "./components/ItemModal";
import { Item, Category } from "../types";
import data from "./data/items.json";

export default function WishPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // 데이터 타입 단언으로 빨간 줄 해결
  const allItems = data.items as unknown as Item[];

  const filteredItems = allItems
    .filter(item => selectedCategory === "ALL" || item.category === selectedCategory)
    .sort((a, b) => Number(a.isGot) - Number(b.isGot));

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <Header selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* 데스크톱에서 왼쪽 헤더 너비(380px)만큼 여백 확보 */}
      <main className="flex-1 lg:pl-[340px] min-h-screen overflow-x-hidden">
        {/* Flex 컨테이너: 줄바꿈 허용, 간격 0 */}
        <div className="flex flex-wrap w-full">
          {filteredItems.map((item) => (
            /* 1개만 있어도 무조건 전체의 1/3 너비만 차지하게 고정 */
            <div key={item.id} 
              className="w-1/2 lg:w-1/3 flex-none mb-30"> 
                <ItemCard
                  item={item}
                  onClick={() => {
                    // [변경] 클릭 시 주소창에 ?item=ID 추가
                    window.history.pushState(null, "", `${item.id}`);
                    setSelectedItem(item);
                  }}  
                />
            </div>
          ))}
        </div>
      </main>

      
      <AnimatePresence mode="wait">
        {selectedItem && (
          <ItemModal 
            key={selectedItem.id}
            item={selectedItem}  
            onClose={() => {
              // [변경] 모달 닫을 때 주소창에서 파라미터 제거
              window.history.pushState(null, "", window.location.pathname);
              setSelectedItem(null);
            }} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}