import React from "react";
import TimelineItem from "./TimelineItem";

const data = [
  {
    year: 2023,
    title: "Web Developer",
    duration: "1 year",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nesciunt sed nostrum deleniti voluptatum a illo ad eos, veniam velit reprehenderit odit aliquid cum, in dolorum? Nobis nihil quos praesentium. Lorem ipsum dolor sit amet aspernatur omnis dolor numquam.",
  },
  {
    year: 2018,
    title: "Department Supervisor",
    duration: "5 years",
    details:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nesciunt sed nostrum deleniti voluptatum a illo ad eos, veniam velit reprehenderit odit aliquid cum, in dolorum? Nobis nihil quos praesentium aspernatur omnis dolor numquam.",
  },
  {
    year: 2023,
    title: "Court Clerk",
    duration: "1 year",
    details:
      "Lorem ipsum dolor sit amet aspernatur omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nesciunt sed nostrum deleniti voluptatum a illo ad eos, veniam velit reprehenderit odit aliquid cum, in dolorum? Nobis nihil quos praesentium dolor numquam.",
  },
];

function Timeline() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">WORK</h1>
      {data.map((item, idx) => (
        <TimelineItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}

export default Timeline;
