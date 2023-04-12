import { useState } from "react";
import Trophy from "../../../assets/trophy.png";
import { ITask } from "./type";

interface ISuccessProps {
  task: ITask;
}

const Success = ({ task }: ISuccessProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`${
          task.completed ? "bg-green_dofus" : "bg-[#2B3125]"
        } w-full flex justify-between text-start items-center px-2 py-3 border border-[#23291e]`}
      >
        <div className="space-x-4 flex items-center">
          <img
            src={Trophy}
            alt="trophy_dofus"
            className="md:w-20 md:h-20 w-10 h-10"
          />
          <div
            className={`${
              task.completed ? "text-white" : "text-white_dofus"
            } space-y-3`}
          >
            <p className="font-bold md:text-lg">{task.title}</p>
            <p>{task.subtitle}</p>
          </div>
        </div>
        <div className="mr-6 hidden md:block">
          <span className="px-5 py-2 bg-[#1e221a] text-white_dofus">100</span>
        </div>
      </button>
      <div
        className={`${
          isCollapsed ? "hidden transition duration-200 ease-out" : "block"
        } bg-[#23291e] space-y-2 py-2`}
      >
        {task.subtask.map((subtask, key) => (
          <div key={key} className="space-x-3 flex items-center px-4">
            <input
              className="accent-green_dofus"
              type="checkbox"
              defaultChecked={subtask.completed}
            />
            <span
              className={`${
                subtask.completed ? "text-[#5a5a54]" : "text-white"
              }`}
            >
              {subtask.taskname}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
