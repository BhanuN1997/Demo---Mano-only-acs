"use client";

import React, { useContext } from "react";
import Information from "./Information";
import { slides } from "../utils/slides";
import { ActiveTabContext } from "@/utils/context";

function MainPanel() {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  return (
    <div className="h-screen p-5 pt-16 grow flex flex-col items-center">
      <section
        className="mx-auto flex flex-row items-center select-none px-7 py-3 my-3 rounded-xl"
        style={{ border: "1px solid rgb(0,0,0,0.1)" }}
      >
        {slides.map((element) => {
          return (
            <div
              key={element.key}
              onClick={() =>
                setActiveTab({ index: element.index, title: element.key })
              }
              className="relative w-[15vw] flex items-center justify-center cursor-pointer"
            >
              <div
                className={`absolute  w-full h-[2px] top-4 ${
                  element.index <= activeTab.index
                    ? "bg-violet-600"
                    : "bg-slate-400"
                }`}
              />

              <div
                className={`z-10 w-8 h-8 rounded-full text-white flex items-center justify-center ${
                  element.index <= activeTab.index
                    ? "bg-violet-600"
                    : "bg-slate-400"
                }`}
              >
                {element.index + 1}
              </div>
            </div>
          );
        })}
      </section>
      <section className="w-[75vw] pt-4 px-4 flex flex-col gap-3 overflow-y-auto overflow-x-hidden">
        <Information id={activeTab.title} />
      </section>
    </div>
  );
}

export default MainPanel;
