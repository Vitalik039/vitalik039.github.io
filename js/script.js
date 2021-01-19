let users = {
	balanc: 0,
};
var click = document.getElementById("click"),
 counter = document.getElementById("block"),
 count = 0;
click.onclick = function() {
 count++;
 counter.textContent = count;
 counter.addEventListener('click', () => counter(count, JSON.strigify(users), 'main.json', 'text/plain'));
};