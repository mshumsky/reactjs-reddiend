export default function cmbcl(baseClass, addClasses) {
	const dirty = [...baseClass.split(" "), ...addClasses.split(" ")];
	const clean = [...new Set(dirty)].filter((value) => Boolean(value));
	return clean.join(" ");
}
