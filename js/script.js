var score = 0;
var updating = 1;
function clickBtn() {
score = score + updating;
document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}