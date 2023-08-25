import { createContext } from "react";

export const ActiveTabContext = createContext({
  activeTab: {
    index: 0,
    title: "introduction",
  },
  setActiveTab: (data: { index: number; title: string }) => {},
});
