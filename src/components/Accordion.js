import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  //function state update if it relies on old state value that might not have updated yet.

  const handleClick = (contentIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === contentIndex) {
        return -1;
      } else {
        return contentIndex;
      }
    });
  };

  //mapping function
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div className="" key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded ? <div className="border-b p-5">{item.content}</div> : null}
      </div>
    );
  });

  return <div className="border- x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
