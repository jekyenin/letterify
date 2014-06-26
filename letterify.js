function letterify(node){
	var letters;
	if(node.length>1){
		for(var i=0,length=node.length;i<length;i++){
			letterify(node[i]);
		}
	}
	else if(node.length==undefined){
		letToSpan(node)
	}
	else if(node.length==1){
		letToSpan(node[0])
	}
	function letToSpan(node){
		letters=node.textContent;
		node.innerHTML='';
		for(var i=0,length=letters.length;i<length;i++){
			span=document.createElement('span');
			span.innerHTML=letters[i];
			node.appendChild(span);
		}
	}
}