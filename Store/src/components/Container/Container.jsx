export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-[1500px] px-2 md:px-6 lg:px-12">
      {children}
    </div>
  );
}
