class Propietario {
	constructor (name, direccion, telefono){
		this.name = name;
		this.direccion = direccion;
		this.telefono = telefono;
	}

	datosPropietario(){
		return `El nombre del dueño es: ${this.name}. El domicilio es: ${this.direccion}, y el numero telefonico de contacto: ${this.telefono}`;
	}
}

class Animal extends Propietario {
	constructor(name, direccion, telefono, mascota, tipo){
		super (name, direccion, telefono);
		this.mascota = mascota;
		this.tipo = tipo;
	}

	datosAnimal(){
		return `El nombre del animal es: ${this.mascota}. Siendo este un: ${this.tipo}`;
	}
}

class Perro extends Animal {
	constructor(name, direccion, telefono, mascota, tipo, enfermedad) {
		super (name, direccion, telefono, mascota, tipo);
		this._enfermedad = enfermedad;
	}
	get enfermedad(){
		return this._enfermedad;
	}
	set enfermedad(nuevaEnfermedad){
		return this._enfermedad = nuevaEnfermedad;
	}
}

class Gato extends Animal {
	constructor(name, direccion, telefono, mascota, tipo, enfermedad) {
		super (name, direccion, telefono, mascota, tipo);
		this._enfermedad = enfermedad;
	}
	get enfermedad(){
		return this._enfermedad;
	}
	set enfermedad(nuevaEnfermedad){
		return this._enfermedad = nuevaEnfermedad;
	}
}

class Conejo extends Animal {
	constructor(name, direccion, telefono, mascota, tipo, enfermedad) {
		super (name, direccion, telefono, mascota, tipo);
		this._enfermedad = enfermedad;
	}
	get enfermedad(){
		return this._enfermedad;
	}
	set enfermedad(nuevaEnfermedad){
		return this._enfermedad = nuevaEnfermedad;
	}
}

let formulario = document.querySelector('form');

let instancias = (event)=> {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    let perro = new Perro(name, direccion, telefono, mascota, tipo, enfermedad);
    // if (tipo == 'perro') {
    // } else if (tipo == 'gato') {
    // 	let gato = new Gato(name, direccion, telefono, mascota, tipo, enfermedad);
    // } else {
    // 	let conejo = new Conejo(name, direccion, telefono, mascota, tipo, enfermedad);
    // }
    let dueno1 = new Propietario(name,direccion,telefono);
    console.log(dueno1.datosPropietario());
    console.log(perro.datosAnimal());
    console.log(perro.enfermedad);
    document.getElementById('resultado').innerHTML = dueno1.datosPropietario() + perro.datosAnimal() + ", y la enfermedad es: " + perro.enfermedad;
}

formulario.addEventListener('submit', instancias);