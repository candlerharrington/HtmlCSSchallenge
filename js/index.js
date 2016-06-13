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

window.onload = function() {
    
    showTable();
    
    //var btn1 = document.createElement('View 1');
    //var btn2 = document.createElement('View 2');
    //var btn3 = document.createElement('View 3');
    
};
function showTable() {
        var output ="";
        output="<ul class='table1'>";
        for (var i=0; i< myData.items.length; i++)
        {
                output +="<li> <span class='cellname'>" + myData.items[i].name+"</span>";
                output += "<span class='cellplace'>" +myData.items[i].place + "</span>";
                output += "<span class='cellthing'>" + myData.items[i].thing+"</span>";
                output += "</li>";
        }
        output +="</ul>"
        document.getElementById("table1").innerHTML = output;
}
function showList() {
    
}
function showLinks() {
    
}