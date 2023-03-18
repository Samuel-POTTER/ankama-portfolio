import React, { useState } from "react";
import Success from "./Success";
import competence from "./data.json";
import { ITask } from "./Success/type";
import Parcho from "assets/img2.jpeg";

const Competences = React.forwardRef<HTMLElement>((_, ref) => {
  const [activeTab, setActiveTab] = useState(0);
  const [competences, setCompetences] = useState(competence.skill);
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <section
      ref={ref}
      className="flex justify-center items-center py-8 h-full bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${Parcho})` }}
    >
      <div className="bg-[#6C6C6B] w-8/12 flex-col h-4/5 items-center flex p-2 rounded-md">
        <div className="text-yellow-500 text-black-shadow uppercase dofus-text-shadow font-bold text-2xl mb-4">
          Competences
        </div>
        <ul className="bg-[#2B3125] w-full h-14 flex items-center justify-center">
          <li
            onClick={() => {
              setActiveTab(0);
              setCompetences(competence.skill);
              setTasks([]);
            }}
            className={`${
              activeTab === 0
                ? "text-green_dofus border-b-2 border-green_dofus bg-[#23291e]"
                : "text-white_dofus"
            } dofus-text-shadow font-bold w-1/4 hover:cursor-pointer text-center py-2`}
          >
            Succès
          </li>
          <li
            onClick={() => {
              setActiveTab(1);
              setCompetences(competence.experience);
              setTasks([]);
            }}
            className={`${
              activeTab === 1
                ? "text-green_dofus border-b-2 border-green_dofus bg-[#23291e]"
                : "text-white_dofus"
            } dofus-text-shadow font-bold w-1/4 hover:cursor-pointer text-center py-2`}
          >
            Expériences
          </li>
          <li
            onClick={() => {
              setActiveTab(2);
              setCompetences(competence.passion);
              setTasks([]);
            }}
            className={`${
              activeTab === 2
                ? "text-green_dofus border-b-2 border-green_dofus bg-[#23291e]"
                : "text-white_dofus"
            } dofus-text-shadow font-bold w-1/4 hover:cursor-pointer text-center py-2`}
          >
            Passions
          </li>
        </ul>
        <div className="w-full h-full flex mt-1 space-x-1">
          <div className="w-1/3 bg-[#2B3125]">
            {competences.map((success, key) => (
              <button
                onClick={() => setTasks(success.tasks)}
                key={key}
                className="flex items-center justify-between mt-2 px-6 font-semibold w-full text-white_dofus"
              >
                <p>{success.name}</p>
                <span>{success.percentage}%</span>
              </button>
            ))}
          </div>
          <div className="w-full h-[44rem] overflow-y-scroll bg-[#2B3125]">
            {tasks?.map((task, key) => (
              <Success key={key} task={task} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Competences;
