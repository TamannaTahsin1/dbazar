export default function Card({ number, cash, card, heading }) {
  return (
    <div>
      <h1 className="mb-2 text-center text-xs font-bold">{heading}</h1>
      <div className="from-primary-400 to-primary-700 h-28 w-36 rounded-lg bg-gradient-to-b px-4 py-3 text-white ">
        <h1 className="text-center text-xs">Total Sales</h1>
        <p className=" my-2 text-center font-semibold">${number}k</p>
        <div>
          <p className="text-xs font-light">Cash:${cash}</p>
          <p className="text-xs font-light">Card:${card}</p>
        </div>
      </div>
    </div>
  );
}
