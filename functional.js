var states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// map: Imperative version
function imperativeMap(states) {
	var urlStates = [];
	states.forEach(function(state)  {
		urlStates.push(state.toLowerCase().split(/\s+/).join("-"));
	});
	return urlStates;
}
console.log(imperativeMap(states));