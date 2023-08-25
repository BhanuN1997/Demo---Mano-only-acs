import { ActiveTabContext } from "@/utils/context";
import { navigations } from "@/utils/navigations";
import React, { useContext } from "react";
import { arr } from "@/utils/slides";

function SidePanel() {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);

  const handleSetActive = (key: string) => {
    setActiveTab({ index: arr[key], title: key });
  };
  return (
    <div
      className="h-screen p-6 pt-20 text-base flex flex-col justify-center gap-2"
      style={{ borderRight: "1px solid rgb(0,0,0,0.3)" }}
    >
      <div
        className="p-5 rounded-xl"
        style={{ border: "1px solid rgb(0,0,0,0.1)" }}
      >
        {navigations.map((navigator: any, index: number) => {
          return (
            <div key={index}>
              <div
                onClick={() => handleSetActive(navigator.key)}
                className="rounded-lg bg-slate-50 hover:bg-[#4611cb1f] px-5 py-1 transition-all duration-200 cursor-pointer font-semibold"
              >
                {navigator.heading}
              </div>
              <div className="pl-5 pt-2 pb-4 text-zinc-500 text-sm flex flex-col gap-1">
                {navigator.subheadings.map(
                  (subheading: string, index: number) => {
                    return <div key={index}>{subheading}</div>;
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SidePanel;
