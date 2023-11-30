import { useState } from "react";
import "./tabs.css";
export const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="buttonDiv">
        {tabs.map((tab, index) => (
          <button
            className={`tabButton ${index === activeTab ? "active" : ""}`}
            key={index}
            onClick={() => handleActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tabDiv">
        {tabs[activeTab].content.type === "image" && (
          <img src={tabs[activeTab].content.source} className="imgTab" />
        )}
      </div>
    </>
  );
};
