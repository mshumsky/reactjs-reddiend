const lsKey = "reduxSaver";
const SAVER_RESTORE = "SAVER_RESTORE";

export default function reduxSaver(store) {
	const listener = () => {
		const state = store.getState();
		const stateJson = JSON.stringify(state);
		localStorage.setItem(lsKey, stateJson);
	};

	store.subscribe(listener);

	const storage = localStorage.getItem(lsKey);
	if (!storage) return;

	store.dispatch({type: SAVER_RESTORE, payload: JSON.parse(storage)});
}

export function cleanSaver() {
	localStorage.removeItem(lsKey);
}

export function wrapInSaverReducer(reducer) {
	function saverReducer(state, action) {
		if (action.type === SAVER_RESTORE) {
			return action.payload;
		}
		return reducer(state, action);
	}
	return saverReducer;
}
