// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ko">
//       <body className="font-pretendard antialiased">{children}</body>
//     </html>
//   );
// }

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-pretendard antialiased">
        {children}
        {/* createPortal이 타겟팅할 위치는 자동으로 body 하단이 됩니다 */}
      </body>
    </html>
  );
}