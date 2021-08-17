const themesList = [];

function addTheme(theme, display) {
	themesList.push({theme, display});
}

addTheme("frontend", "Frontend");
addTheme("reactjs", "ReactJS");
addTheme("vuejs", "VueJS");
addTheme("angularjs", "AngularJS");

export default themesList;
