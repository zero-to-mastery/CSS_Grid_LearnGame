//return object must be in react style format.
//ex "justify-content" should be "justifyContent"
export const SolutionContainer = (solutionNum) => {
	switch(solutionNum) {
		case "solution1":
				return {justifyContent:"flex-end"}
		case "solution2":
				return {justifyContent:"space-around"}
		case "solution3":
				return {alignItems:"center", justifyContent:"flex-end"}
		case "solution4":
				return {alignItems:"flex-end", flexDirection:"row-reverse"}
		default:
			return "Nothing"
	}
}
