import { navigations } from "@/utils/navigations";
import React from "react";

function SidePanel() {
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
            <>
              <div className="rounded-lg bg-slate-50 px-5 py-1 cursor-pointer font-semibold">
                {navigator.heading}
              </div>
              <div className="pl-5 pt-2 pb-4 text-zinc-500 text-sm flex flex-col gap-1">
                {navigator.subheadings.map(
                  (subheading: string, index: number) => {
                    return <div key={index}>{subheading}</div>;
                  }
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SidePanel;
