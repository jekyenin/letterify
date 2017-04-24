(function(window, undefined) {
	"use strict";

	function letterify(node){

		var letters = node.textContent,
			span;

		node.innerHTML = '';

		for( var i = 0, length = letters.length; i < length; i++ ){
			span = document.createElement( 'span' );
			span.classList.add('js_letterify');
			span.innerHTML = letters[ i ];
			node.appendChild( span );
		}
		node.classList.add('js_letterified');

		return node;
		
	}
	function deletterify(node){
		var elems, parent, elem, clone, string = '';

		clone = node.cloneNode(true);
		elems = clone.querySelectorAll('.js_letterify');

		for(var i = 0, length = elems.length; i < length; i++){
			elem = elems[i];
			string += elem.textContent;
		}
		node.innerHTML = string;
		node.classList.remove('js_letterified');
		
		return node;
	}

	var elems = document.querySelectorAll('[data-letterify]'),
		elem;

	for(var i = 0, length = elems.length; i < length; i++){
		elem = elems[i];
		letterify(elem);
	}

	window.letterify = letterify;
	window.deletterify = deletterify;
})(window);