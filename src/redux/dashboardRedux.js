/* selectors */
export const getAll = ({ tasks }) => tasks;

export const getUnplannedTask = ({ tasks }) =>
  tasks.filter(item => !item.plan);

/* action name creator */
const reducerName = 'dashboard';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_TASK_PARAMS = createActionName('CHANGE_TASK_PARAMS');

/* action creators */
export const changeTaskParams = payload => ({ payload, type: CHANGE_TASK_PARAMS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_TASK_PARAMS:
      console.log(action.payload);
      return statePart.map(task =>
        task.id === action.payload.id
          ? { ...task, plan: action.payload.plan, date: action.payload.date, team: action.payload.team }
          : task
      );

    default:
      return statePart;
  }
}
