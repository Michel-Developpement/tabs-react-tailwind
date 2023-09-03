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
      <div className=" translate-x-[20%]">
        <div className="flex justify-between w-3/5 text-center">
          {tabList.map((item: TabList, index: number) => (
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              key={index}
              onClick={() => setSelectedTab(index)}
            >
              {tabList[index].header}
            </button>
          ))}
        </div>
        <div className="bg-slate-900 text-slate-100 w-3/5 text-center">
          <p className="text-2xl">{tabList[selectedTab].title}</p>
          <p className="text-xl">{tabList[selectedTab].body}</p>
        </div>
      </div>
    </>
  );
}
