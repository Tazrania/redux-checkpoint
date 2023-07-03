import { useSelector, useDispatch } from "react-redux";
import { filterTask } from "./actions";

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();



const filteredTasks =
filter === 'done'
    ? tasks.filter((task) => task.isDone)
    : filter === 'notDone'
    ? tasks.filter((task) => !task.isDone)
    : tasks;

    return (
        <div>
            <button onClick={() => dispatch(filterTask('all'))}>All</button>
            <button onClick={() => dispatch(filterTask('done'))}>Done</button>
            <button onClick={() => dispatch(filterTask('notDone'))}>Not Done yet</button>

            <ul>
            {filteredTasks.map((task) => (
                <li key={task.id}>{task.description}</li>
        ))}
            </ul>
        </div>
    );
};

export default ListTask;