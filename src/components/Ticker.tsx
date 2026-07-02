import { TICKER_ITEMS } from '../lib/data';

export default function Ticker() {
  const row = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden bg-navy py-4 select-none">
      <div className="ticker flex whitespace-nowrap w-max">
        {row.map((item, i) => (
          <span key={i} className="flex items-center font-serif italic text-paper/90 text-lg md:text-xl">
            <span className="px-7">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-safety inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
