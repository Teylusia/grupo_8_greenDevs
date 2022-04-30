const fila4 = document.querySelector('.carousel4');
const productsList4 = document.querySelectorAll('.offersList');

const flechaIzquierda4 = document.getElementById('flecha-izquierda-4');
const flechaDerecha4 = document.getElementById('flecha-derecha-4');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha4.addEventListener('click', () => {
	fila4.scrollLeft += fila4.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores4 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda4.addEventListener('click', () => {
	fila4.scrollLeft -= fila4.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores4 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas4 = Math.ceil(productsList4.length / 5);
for(let i = 0; i < numeroPaginas4; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores4').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila4.scrollLeft = i * fila4.offsetWidth;

		document.querySelector('.indicadores4 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}
