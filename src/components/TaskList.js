import TaskShow from "./TaskShow";

function TaskList({ tasks,findId,onUpdate }) {
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return <TaskShow task = {task}  key={task.id}  findId={findId} onUpdate={onUpdate}/>;
      })}
    </div>
  );
}

export default TaskList;
