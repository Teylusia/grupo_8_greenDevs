const fila1 = document.querySelector('.carousel1');
const productsList1 = document.querySelectorAll('.popularOffersList');

const flechaIzquierda1 = document.getElementById('flecha-izquierda-1');
const flechaDerecha1 = document.getElementById('flecha-derecha-1');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha1.addEventListener('click', () => {
	fila1.scrollLeft += fila1.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores1 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda1.addEventListener('click', () => {
	fila1.scrollLeft -= fila1.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores1 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas1 = Math.ceil(productsList1.length / 5);
for(let i = 0; i < numeroPaginas1; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores1').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila1.scrollLeft = i * fila1.offsetWidth;

		document.querySelector('.indicadores1 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
