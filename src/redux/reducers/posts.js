export const POSTS_ADD = "POSTS_ADD";
export const POSTS_ADD_ASYNC = "POSTS_ADD_ASYNC";
export const POSTS_REMOVE = "POSTS_REMOVE";
export const POSTS_REMOVE_ASYNC = "POSTS_REMOVE_ASYNC";
export const POSTS_REPLACE = "POSTS_REPLACE";
export const POSTS_LIKE = "POSTS_LIKE";
export const POSTS_LIKE_ASYNC = "POSTS_LIKE_ASYNC";

const initialState = [];

export default function postsReducer(state = initialState, {type, payload}) {
	switch (type) {
		case POSTS_ADD: {
			return [...state, payload];
		}
		case POSTS_REMOVE: {
			return state.filter((post) => post.id !== payload);
		}
		case POSTS_REPLACE: {
			return [...payload];
		}
		case POSTS_LIKE: {
			const nextState = [...state];
			const postId = state.findIndex((value) => value.id === payload);
			nextState[postId].liked = !nextState[postId].liked;
			return nextState;
		}
		default: {
			return state;
		}
	}
}

export const addPostCreator = (payload) => ({type: POSTS_ADD, payload});
export const addPostCreatorAsync = (theme) => ({type: POSTS_ADD_ASYNC, theme});
export const delPostCreator = (payload) => ({type: POSTS_REMOVE, payload});
export const delPostCreatorAsync = (id) => ({type: POSTS_REMOVE_ASYNC, id});
export const likePostCreator = (payload) => ({type: POSTS_LIKE, payload});
export const likePostCreatorAsync = (id) => ({type: POSTS_LIKE_ASYNC, id});
