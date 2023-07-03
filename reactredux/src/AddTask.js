import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask} from "./actions";

const AddTask = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();


const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), description: task, isDone: false }));
    setTask('');
};
return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
    </form>
);
};

export default AddTask;

