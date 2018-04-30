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

// map: Functional version
function functionalMap(states) {
	return states.map(function(state)  {return state.toLowerCase().split(/\s+/).join('-')});
}
console.log(functionalMap(states));

[1, 2, 3, 4, 5].map(function(n) { return n * n; });
