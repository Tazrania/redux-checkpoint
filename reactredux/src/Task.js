import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "./actions";


const Task = ({ task }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState(task.description);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        dispatch(editTask({ ...task, description: editedTask }));
        setEditMode(false);
    };

    return (
        <div>
            {!editMode ? (
            <div>
            <span>ID: {task.id}</span>
            <span>Description: {task.description}</span>
            <span>Status: {task.isDone ? 'Done' : 'Not Done Yet'}</span>
            <button onClick={handleEdit}>Edit</button>
            </div>
        ) : (
            <div>
            <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            </div>
        )}
        </div>
    );
};

export default Task;