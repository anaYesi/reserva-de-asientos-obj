function DatosPasajero(nombre, apellido, dni)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
}

function AsientoBus()//funcion constructora
{
	this.N = 32;
	this.asientos = new Array(this.N);
	this.asientoSelec = -1;
	this.reservar = function()
	{
		if(this.asientoSelec == -1)
		{
			alert("Pasejero no registrado, elija un asiento");
		}
		else
		{
			var pasajero = new DatosPasajero(n,a,d);
			this.asientos[this.asientoSelec-1] = pasajero;
			alert("pasajero registrado correctamente");
			asientoSelec=-1;		
			console.log(asientos);
 			//celda.style.backgroundColor = '#F8ED50';
		}

	}
}

var asientobus = new AsientoBus();
var botonReservar = document.getElementById ("reservarBtn");
botonReservar.onclick = function () 
{
	  var n = document.getElementById("nombre").value;
	  var a = document.getElementById("apellido").value;
	  var d = document.getElementById("dni").value;
	  var pasajero = new DatosPasajero(n,a,d);
      asientobus.reservar();

};

var botonBuscar = document.getElementById ("buscarBtn");
botonBuscar.onclick = function () 
{
   

};


var botonCacelar = document.getElementById ("cancelarBtn");
botonCacelar.onclick = function () 
{      

};

var botonListar = document.getElementById ("listarBtn");
botonListar.onclick = function () 
{     

};