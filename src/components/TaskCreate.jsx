import { useState } from "react";
import "../App.css";

function TaskCreate({ onCreate, task, formStatus, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setDesc] = useState(task ? task.title : "");

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleDesc(event) {
    setDesc(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (formStatus) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }
    setTitle("");
    setDesc("");
  }

  return (
    <div>
      {formStatus ? (
        <div className="task-update">
          <h3>Task Güncelleyin !!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleTitle}
              className="task-input"
              required
            ></input>
            <label className="task-label">Task Açıklaması</label>
            <textarea
              value={taskDesc}
              onChange={handleDesc}
              className="task-input"
            ></textarea>
            <button onClick={handleSubmit}>Güncelle</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleTitle}
              className="task-input"
              required
            ></input>
            <label className="task-label">Task giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleDesc}
              className="task-input"
            ></textarea>
            <button onClick={handleSubmit}>Oluştur</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
