var reddit = require("./data.json")

// Write your solutions below
// console.log("Title: " + reddit["data"].children[0].data.title);
// console.log("Permalink: " + reddit["data"].children[0].data.permalink);
// console.log("Self text: ") + reddit["data"].children[0].data.selftext);
// console.log("Score: ") + reddit["data"].children[0].data.score);

//1. `forEach` -  `console.log` all titles
// var printTitles = function (element, index) {
// 	console.log(element.data.title);
// };

// console.log("TITLES")
// console.log("---------------------")
// reddit["data"].children.forEach(printTitles);
// console.log("---------------------")


// 2. `map` - Return an array of permalinks, that contain full http:// path to reddit

// var getPermalink = function (element, index) {
// 	return "http://reddit.com" +element.data.permalink;
// }

// var permalinks = reddit["data"].children.map(getPermalink);

// console.log("PERMALINKS")
// console.log("---------------------")
// console.log(permalinks);
// console.log("---------------------")

// 3. `filter` - Filter the posts that contain the `selftext` key

// var getSelfText = function (element, index) {

// 	return element.data.selftext.length > 0 
// }

// var selfTextPosts = reddit["data"].children.filter(getSelfText)


// console.log(selfTextPosts)

// 4. `reduce` - Use reduce to count all the `score` values across posts

var scores = function (prev, current) {
	return prev + current.data.score;
}

var totalScore = reddit["data"].children.reduce(scores, 0)

console.log("TOTAL SCORE")
console.log("---------------------")
console.log(totalScore)
console.log("---------------------")








