import ToggleButton from "../Button/ToggleButton";
import LowerActions from "./LowerActions";
import UpperActions from "./UpperActions";

export default function Actions({
  searchPlaceholder,
  CategoryOptions,
  PriceOptions,
}) {
  return (
    <div className=" mt-5">
      <UpperActions />
      <LowerActions
        searchPlaceholder={searchPlaceholder}
        CategoryOptions={CategoryOptions}
        PriceOptions={PriceOptions}
      />
    </div>
  );
}
