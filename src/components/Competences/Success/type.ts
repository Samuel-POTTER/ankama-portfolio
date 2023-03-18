export interface ISuccess {
  name: string;
  percentage: string;
  tasks: ITask[];
}

export interface ITask {
  title: string;
  subtitle: string;
  subtask: ISubtask[];
  completed: boolean;
}

interface ISubtask {
  taskname: string;
  completed: boolean;
}
