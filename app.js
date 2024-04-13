// Código JavaScript

// Clase base
class Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.proteinas = proteinas;
        this.carbohidratos = carbohidratos;
        this.grasas = grasas;
    }
}
// Subclase Fruta
class Fruta extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas, azucar) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
        this.azucar = azucar;
    }
}

// Subclase Verdura
class Verdura extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas, vitaminac) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
        this.vitaminac = vitaminac;
    }
}

// Subclase Carne
class Carne extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas, tipo) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
        this.tipo = tipo;
    }
}

// Arreglo para almacenar los alimentos seleccionados
let alimentosSeleccionados = [];
// Objetivos del usuario para la ingesta diaria de nutrientes
const objetivosUsuario = {
    calorias: 4000,
    proteinas: 30,
    carbohidratos: 150,
    grasas: 8
};

// Función para agregar un alimento seleccionado
function agregarAlimento() {
    // Obtener los elementos del formulario
    const select = document.getElementById("alimento");
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const alimentoSeleccionado = select.value;

    let alimento;

    // Crear una instancia del alimento seleccionado
    switch (alimentoSeleccionado) {
        case "banana":
            alimento = new Fruta('Banana', 56, 0.56, 74.8, 5.3, 5.6);
            break;
        case "berenjena":
            alimento = new Verdura('Berenjena', 23, 5, 5, 0.4, 482.9);
            break;
        case "hamburger":
            alimento = new Carne('Hamburger', 269, 51, 0, 3.6, 'Aves');
            break;
        default:
            break;
    }

    // Multiplicar las propiedades nutricionales por la cantidad seleccionada
    alimento.calorias *= cantidad;
    alimento.proteinas *= cantidad;
    alimento.carbohidratos *= cantidad;
    alimento.grasas *= cantidad;

    // Agregar el alimento a la lista de alimentos seleccionados
    alimentosSeleccionados.push(alimento);

    // Mostrar los resultados en la interfaz
    mostrarResultados();
}

// Función para mostrar los resultados en la interfaz
function mostrarResultados() {
    // Calcular el total de calorías, proteínas, carbohidratos y grasas de los alimentos seleccionados
    const totalCalorias = alimentosSeleccionados.reduce((acc, curr) => acc + curr.calorias, 0);
    const totalProteinas = alimentosSeleccionados.reduce((acc, curr) => acc + curr.proteinas, 0);
    const totalCarbohidratos = alimentosSeleccionados.reduce((acc, curr) => acc + curr.carbohidratos, 0);
    const totalGrasas = alimentosSeleccionados.reduce((acc, curr) => acc + curr.grasas, 0);

    // Mostrar los resultados en la interfaz
    document.getElementById("total-calorias").textContent = `Calorías: ${totalCalorias}`;
    document.getElementById("total-proteinas").textContent = `Proteínas: ${totalProteinas}g`;
    document.getElementById("total-carbohidratos").textContent = `Carbohidratos: ${totalCarbohidratos}g`;
    document.getElementById("total-grasas").textContent = `Grasas: ${totalGrasas}g`;

    // Comparar los resultados con los objetivos del usuario y mostrar un mensaje
    const mensajeObjetivos = compararConObjetivos({calorias: totalCalorias, proteinas: totalProteinas, carbohidratos: totalCarbohidratos, grasas: totalGrasas}, objetivosUsuario);
    document.getElementById("objetivos-mensaje").textContent = mensajeObjetivos;
}

