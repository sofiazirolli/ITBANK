function getPrice(dolar){
	return fetch(`https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
	.then(response => response.json())
	.then(price => { 
		let categories = ['DOLAR OFICIAL', 'DOLAR BLUE', 'DOLAR CONTADO CON LIQUI', 'DOLAR BOLSA', 'DOLAR TURISTA'];

		let filterDolar = price.filter(price => categories.includes(price.casa.nombre.toUpperCase()));

		filterDolar.forEach(price => {
			let json = price.casa;
			let dolarView = document.getElementById('caja');

			if(json.compra === 'No Cotiza'){
				dolarView.innerHTML += `<div class="col mb-4" id='${json.nombre}'>
				<div class="card">
				<div class="card-header">
				<h5 class="card-title">${json.nombre}</h5>
				</div>
				<div class="card-body">
				<p class="card-text">
				<span>VENTA</span><br>
				<span>$${json.venta}</span>
				<p>VARIACIÓN: ${json.variacion}%</p>
				</p>
				</div>
				</div>
				</div>`;
			} else {
				dolarView.innerHTML += `<div class="col mb-4" id='${json.nombre}'>
				<div class="card">
				<div class="card-header">
				<h5 class="card-title">${json.nombre}</h5>
				</div>
				<div class="card-body">
				<p class="card-text">
				<span>COMPRA</span>
				<span>VENTA</span><br>
				<span>$${json.compra}</span>
				<span>$${json.venta}</span>
				<p>VARIACIÓN: ${json.variacion}%</p>
				</p>
				</div>
				</div>
				</div>`;
			}	
		})	

	});
};	

setInterval(function(){
    location.href = location.href
}, 3600000);
