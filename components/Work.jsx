import { experience } from "@/constants";
import React from "react";

const Work = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold ">Work</h1>
      <div className="mt-10">
        <table className="w-full">
          {experience.map((exp) => {
            return (
              <tbody key={exp.company} className="pt-3">
                <tr className="">
                  <td className="pt-2 font-semibold ">{exp.company}</td>
                  <td className="w-1/3 text-right">{exp.title}</td>
                  <td className="w-1/3 pl-10 ">{exp.date}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Work;
