import BpCheckbox from "@/common/CustomCheckbox/CustomCheckbox";

const capacity = [
  { id: 1, title: "2 Person" },
  { id: 2, title: "4 Person" },
  { id: 3, title: "6 Person" },
  { id: 4, title: "8 Or More" },
];

const DesktopCategory = ({types}) => {
  return (
    <section className="bg-white p-8 xl:min-w-[360px] hidden lg:block">
      <ul className="mb-12">
        <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
          Type
        </h2>
        {types.map((type) => {
          return (
            <li className="mb-6 text-xl font-semibold ">
              <BpCheckbox id={type._id} />
              <label
                htmlFor={type._id}
                className="cursor-pointer text-secondary-400 mr-1"
              >
                {type.title}
              </label>
              <span className="text-secondary-300">(10)</span>
            </li>
          );
        })}
      </ul>
      <ul>
        <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
          Capacity
        </h2>
        {capacity.map((item) => {
          return (
            <li className="mb-6 text-xl font-semibold">
              <BpCheckbox id={item.id} />
              <label
                htmlFor={item.id}
                className=" cursor-pointer text-secondary-400 mr-1"
              >
                {item.title}
              </label>
              <span className="text-secondary-300">(10)</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DesktopCategory;
