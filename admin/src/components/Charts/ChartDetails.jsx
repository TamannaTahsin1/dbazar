export default function ChartDetails({ serial, names, ProgressNumber }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs gap-2">
        <div className="flex gap-2 font-semibold">
          <p>{serial}</p>
          <p>{names}</p>
        </div>
        <div className="flex w-[80px] md:w-[160px] flex-col items-start gap-2">
          <div
            className={`flex h-1 w-full  items-center justify-center rounded-full bg-gray-300`}
          >
            <div
              style={{ width: `${ProgressNumber}%` }}
              className={`transition-width mr-auto h-1 w-0 rounded-full  bg-primary duration-500`}
            ></div>
          </div>
        </div>
        <span className="rounded-lg border border-sky-500 px-1 md:px-2 text-center text-xs font-medium text-sky-500">
          {ProgressNumber} %
        </span>
      </div>
    </div>
  );
}
