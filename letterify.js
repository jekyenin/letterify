function letterify(node){
	var letters;
	if(node.length>1){
		for(var i=0,length=node.length;i<length,i++){
			letterify(node[i]);
		}
	}
	else if(node.length==1){
		letters=node.textContent;
		node.innerHTML='';
		for(var i=0,length=letters.length;i<length;i++){
			span=document.createElement('span');
			span.innerHTML=letters[i];
			node.appendChild(span);
		}
	}
	else(node.length<1){
		console.log('Error no elem to proccess');
	}

}