import { ADD_TASK, EDIT_TASK, FILTER_TASK } from './actionTypes';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const editTask = (task) => ({
    type: EDIT_TASK,
    payload: task,
});

export const filterTask = (filter) => ({
    type: FILTER_TASK,
    payload: filter,
});