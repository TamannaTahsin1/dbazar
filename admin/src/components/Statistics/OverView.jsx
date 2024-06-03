import Card from "./Card";

export default function OverView() {
  return (
    <div>
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Card number="1.2" cash="500" card="700" heading="Yesterday" />
          <Card number="89" cash="50k" card="49k" heading="Last Week" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Card number="44" cash="32k" card="12k" heading="Last Month" />
          <Card number="47533" cash="28457" card="19076" heading="Total" />
        </div>
      </div>
    </div>
  );
}
