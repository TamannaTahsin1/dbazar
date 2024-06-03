export default function Container({ children }) {
    return (
      <div className="max-w-[1480px] px-2 md:px-6 lg:px-12 mx-auto">
        {children}
      </div>
    );
  }
  