import Calculate from "./Calculate";
import { Times } from "./Times";
import Location from "./Location";

const Content = ({ data }: { data: any | object }) => {
  return (
    <div className="p-6 bg-white md:p-8 dark:bg-darkBlue text-base rounded-lg  w-full mx-auto">
      <Location data={data} />
      <Times data={data} />
      <Calculate data={data} />
    </div>
  );
};

export default Content;
