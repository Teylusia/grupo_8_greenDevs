const fila3 = document.querySelector('.carousel3');
const productsList3 = document.querySelectorAll('.newReleasesList');

const flechaIzquierda3 = document.getElementById('flecha-izquierda-3');
const flechaDerecha3 = document.getElementById('flecha-derecha-3');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores3 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores3 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas3 = Math.ceil(productsList3.length / 5);
for(let i = 0; i < numeroPaginas3; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores3').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila3.scrollLeft = i * fila3.offsetWidth;

		document.querySelector('.indicadores3 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
