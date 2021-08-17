export default function clsx(obj) {
	const classList = Object.keys(obj);

	classList.forEach((key, index) => {
		const field = obj[key];
		!Boolean(field) && classList.splice(index, 1);
	});

	return classList.join(" ");
}
