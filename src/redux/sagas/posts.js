import {put, takeEvery} from "redux-saga/effects";
import {addPostCreator, delPostCreator, likePostCreator, POSTS_ADD_ASYNC, POSTS_LIKE_ASYNC, POSTS_REMOVE_ASYNC} from "../reducers/posts";

function* addPostWorker({theme}) {
	const response = yield fetch(`https://www.reddit.com/r/${theme}.json`);
	const json = yield response.json();
	const posts = json.data.children;
	const post = posts[Math.floor(Math.random() * posts.length)].data;

	const postObject = {
		id: post.id,
		title: post.title,
		link: post.url,
		liked: false
	};

	yield put(addPostCreator(postObject));
}

function* likePostWorker({id}) {
	yield put(likePostCreator(id));
}

function* delPostWorker({id}) {
	yield put(delPostCreator(id));
}

export default function* postsWatcher() {
	yield takeEvery(POSTS_ADD_ASYNC, addPostWorker);
	yield takeEvery(POSTS_LIKE_ASYNC, likePostWorker);
	yield takeEvery(POSTS_REMOVE_ASYNC, delPostWorker);
}
