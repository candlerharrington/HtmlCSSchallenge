var myData =
	{
		items: 
		[
			{ name: "Names", place: "Places", thing: "Things"},
			{ name: "James", place: "Paris", thing: "Books"},
			{ name: "Laura", place: "Mexico", thing: "Chairs"},
			{ name: "Sam", place: "Italy", thing: "Paper"}
		]
	};
function showTable(obj) {
    var output = "";

    output = "<ul class='table'>";
    for (var i = 0; i < obj.items.length; i++) {
        output += " <li> "
    for (var field in obj.items[i]) {
        output += "<span class='cell"+ field + "'>" + obj.items[i][field] + "</span>";
        }
    output += "</li>"; 
    }
    output += "</ul>"
    document.getElementById("table").innerHTML = output;
}
function showList(obj) {
    var output = "";
    
    output = "<ul class='list'>";
    for (var i = 0; i < obj.items.length; i++) {
        output += " <li> "
    for (var field in obj.items[i]) {
        output += "<span class='cell"+ field + "'>" + field + ": " + obj.items[i][field] + "</span>";
        }
    output += "</li>"; 
    }
    output += "</ul>";
    document.getElementById("list").innerHTML = output;
}
function showLinks(obj) {
    var output = "";
    
    output = "<ul class='links'>";
    for (var i = 0; i < obj.items.length; i++) {
        output += " <li> "
    for (var name in obj.items[i]) {
        output += "<span class='cell"+ field + "'>" + obj.items[i][field] + "</span>";
        }
    output += "</li>"; 
    }
    output += "</ul>";
    document.getElementById("links").innerHTML = output;
}
window.onload = function() {
    
    showTable(myData.items);
    showList(myData.items);
    showLinks(myData.items);
    
};