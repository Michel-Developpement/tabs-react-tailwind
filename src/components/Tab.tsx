import React from "react";
import tabList from "../data/tabList";

type TabList = {
  header: string;
  title: string;
  body: string;
};
export default function Tab() {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  return (
    <>
      <div className="tab rounded-md border border-r-stone-800">
        <div className="flex justify-between text-center">
          {tabList.map((item: TabList, index: number) => (
            <button
              className="bg-gray-800 w-10 text-white px-4 py-2 rounded-md pointer-events-auto button"
              key={index}
              onClick={() => setSelectedTab(index)}
            >
              {tabList[index].header}
            </button>
          ))}
        </div>
        <div className="bg-slate-900 text-slate-100 text-center rounded-md tab-body">
          <p className="text-xl">{tabList[selectedTab].title}</p>
          <p className="text-3xl">{tabList[selectedTab].body}</p>
        </div>
      </div>
    </>
  );
}
