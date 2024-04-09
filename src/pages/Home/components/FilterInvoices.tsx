import { useContext } from "react";
import Filter from "./Filter";
import ShowNewInVoice from "../../../context/newInVoice";


const FilterInVoices = ({setFilter,filter,}: {setFilter: (e: any) => void;filter: string;}) => {
  const { showModal } = useContext(ShowNewInVoice);
  return (
    <div className="flex items-center gap-2 sm:gap-10  shm:gap-5 md:gap-12">
      <Filter filter={filter} setFilter={setFilter} />
      <button className="flex cursor-pointer p-2 pr-3.5 gap-2 items-center bg-purple rounded-[50px] lg:hover:opacity-85"
        onClick={showModal}
              data-ripple-light="true"
        data-dialog-target="dialog"
      >
        <p className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-purple font-bold">
          <img src="/plus.svg" alt="plus" />
        </p>
        <span className="font-bold text-white text-base">New <span className="hidden md:inline">Invoice</span></span>
      </button>
    </div>
  );
};

export default FilterInVoices;
