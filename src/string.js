function isString(value) {
	return typeof value === 'string' || value instanceof String;
}


function contains(source, value) {
	if (source == undefined || value == undefined) {
		return false
	}
	return source.indexOf(value) > -1;
}

module.exports = {
	isString,
	contains
};