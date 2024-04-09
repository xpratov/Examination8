import { useState } from "react";
import SingleCheckbox from "./SingleCheckbox";

const Filter = ({filter,setFilter,}: {filter: string;setFilter: (e: any) => void;}) => {
  const [show, setShow] = useState(false);

  return (
    <article className="flex flex-col items-center ">
      <p onClick={() => setShow(!show)} className="font-bold text-black dark:text-white  text-sm flex items-center gap-3  cursor-pointer">
        <span>Filter<span className="hidden md:inline"> by status</span></span>
        <img src="/filter-arrow.svg" alt="arrow"
          className={(show ? "rotate-180" : "")}
        />
      </p>
      <p></p>
      <ul onClick={()=>{setShow(!show)}} 
        className={"max-w-[192px] w-full  z-20 bg-white rounded-md p-6 absolute shadow-md opacity-0 dark:shadow-[black]  translate-y-[50px] dark:bg-lightBlue  flex flex-col gap-2 " +
          (show ? "scale-100 opacity-100":"hidden opacity-100")}>
        <SingleCheckbox text="Draft" checked={filter} setChecked={setFilter} />
        <SingleCheckbox text="Pending" checked={filter}
          setChecked={setFilter}/>
        <SingleCheckbox text="Paid" checked={filter} setChecked={setFilter} />
      </ul>
    </article>
  );
};

export default Filter;
