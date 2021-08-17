import {Provider} from "react-redux";
import Background from "./components/Background";
import ThemeSelector from "./components/ThemeSelector";
import store from "./redux";
import "./styles.css";
import themesList from "./constants/themesList";
import PostsList from "./components/PostsList";

function App() {
	return (
		<div className="App">
			<Background />
			<ThemeSelector themes={themesList} />
			<PostsList className="App__Posts" />
		</div>
	);
}

export default function AppContainer() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
