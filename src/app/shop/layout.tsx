export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* 
        하위 컴포넌트에서 외부 api를 통해 데이터를 가져오기 때문에 
        해당 부분 ErrorBoundary 추가할 예정입니다.
      */}
      {children}
    </div>
  );
}
