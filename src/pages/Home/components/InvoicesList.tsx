import Empty from "./Empty";
import SingleInVoices from "./SingleInVoices";

const InVoices = ({datas,ids,}: {datas: object[] | any[];ids: string[];}) => {
  const getTotalPrice = (e: { items: any[] }) => {

    let lastValue: number = 0;
    if (e.items) {
      lastValue = e.items.reduce((acc, e) => {
        return acc + +e.count * +e.price;
      }, 0);
    }

    return lastValue;
  };
  return (
    <div
      className={"h-auto sxm:px-0 md:px-0 px-6 md:pt-14 pt-8 w-full flex flex-wrap justify-center gap-4 items-center " +
        (datas?.length === 0 ? "items-center" : "")
      }
    >
      {datas?.length! > 0 ? (
        datas?.map((e, i) => {
          return (
            <SingleInVoices target={ids[i]} author={e.author.slice(0, e.author.lastIndexOf("@"))}
                id={e.id} paymentTerms={e.paymentTerms}
            date={e.invoiceDate} price={getTotalPrice(e) + ""}
              type={e.type} key={i}
            />);
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default InVoices;
