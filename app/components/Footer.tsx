"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import ItemModal from "./components/ItemModal";
import { Item, Category } from "./types";
import itemsData from "./data/items.json";

export default function WishPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // 필터링 및 정렬: isGot false가 먼저
  const filteredItems = itemsData.items
    .filter(item => selectedCategory === "ALL" || item.category === selectedCategory)
    .sort((a, b) => Number(a.isGot) - Number(b.isGot));

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Pretendard, sans-serif' }}>
      {/* Header 컴포넌트 */}
      <Header 
        selected={selectedCategory} 
        onSelect={setSelectedCategory} 
      />

      {/* 메인 컨텐츠 영역 */}
      <main className="lg:ml-[420px] p-0">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </main>

      {/* 모달 */}
      <AnimatePresence>
        {selectedItem && (
          <ItemModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>

      {/* 전역 스타일 */}
      <style>{`
        * {
          outline: none !important;
          box-sizing: border-box;
        }
        
        button:focus,
        a:focus,
        div:focus {
          outline: none !important;
          border: none !important;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}