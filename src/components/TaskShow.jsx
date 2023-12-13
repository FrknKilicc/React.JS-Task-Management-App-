import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, findId,onUpdate }) {
  const [updateBtnStatus, setUpdateBtnStatus] = useState(false);
  const handleDeleteClick = () => {
    findId(task.id);
  };
  const showUpdateForm = () => {
    setUpdateBtnStatus(!updateBtnStatus);
  };
  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setUpdateBtnStatus(false);
    onUpdate(id,updatedTitle,updatedTaskDesc);
  };
  return (
    <div className="task-show">
      {updateBtnStatus ? (
        <TaskCreate task={task} formStatus={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacak</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="update" onClick={showUpdateForm}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
