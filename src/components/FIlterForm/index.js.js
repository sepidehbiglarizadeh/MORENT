import DoubleArrow from "@/common/icons/DoubleArrow";
import { Button } from "@mui/material";
import FilterControl from "./FilterControl/FilterControl";

const FilterForm = () => {
  return (
    <form className="flex flex-col items-center md:flex-row md:justify-between  gap-y-8 md:gap-x-11 relative container mx-auto max-w-[1440px]">
      <FilterControl title="Pick-Up" />
      <Button
        variant="contained"
        className="bg-primary-500 w-[60px] h-[60px] hover:bg-primary-600 rounded-[10px] absolute top-[122px] md:static "
      >
        <DoubleArrow />
      </Button>
      <FilterControl title="Drop-Off" />
    </form>
  );
};

export default FilterForm;
