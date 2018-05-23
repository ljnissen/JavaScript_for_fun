// Reverses a string
function reverse(string) {
	return string.split("").reverse().join("");
}

// Returns true for a palindrome, false otherwise
function palindrome(string) {
	var processedContent = string.toLowerCase();
	return processedContent === reverse(processedContent);
}