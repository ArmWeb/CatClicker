function catClicker(items){
	if(!(this instanceof catClicker)){
		return new catClicker();
	} 
	var left_div = document.getElementById('left_div');
	var right_div = document.getElementById('right_div');
	for(var i in items){
		var list_item = document.createElement('p');
		list_item.innerHTML = items[i][0];
		left_div.appendChild(list_item);
		var counter = 0;
		list_item.addEventListener('click',(function(i,counter){
			return function(){
				right_div.innerHTML = "image clicks for "+items[i][0]+": <span id='clicks_"+i+"'>"+counter+"</span><br><img src='"+items[i][1]+"' id='img_"+i+"' width='500px'>";
				document.getElementById('img_'+i).addEventListener('click',function(){
					counter++;
					document.getElementById('clicks_'+i).innerHTML = counter;
				})
			}
		})(i,counter))
	}
}
var items = [['Katty','http://www.hdwalls.in/wp-content/uploads/2014/10/images_of_nice_cats-11.jpg'],['Matty','http://data.whicdn.com/images/30048512/superthumb.jpg']];
new catClicker(items);