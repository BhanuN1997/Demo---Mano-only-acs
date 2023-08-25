"use client";
import { useState } from "react";
import MainPanel from "@/components/MainPanel";
import SidePanel from "@/components/SidePanel";
import { ActiveTabContext } from "@/utils/context";

export default function Home() {
  const [activeTab, setActiveTab] = useState({
    index: 0,
    title: "introduction",
  });
  const handleClick = (element: { index: number; title: string }) => {
    setActiveTab(element);
  };
  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      <SidePanel />
      <MainPanel />
    </ActiveTabContext.Provider>
  );
}
