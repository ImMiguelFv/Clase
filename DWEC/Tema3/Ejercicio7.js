// Crear un mapa vacío
const mapaDNI = new Map();

// Añadir DNI y nombres de 10 personas ficticias
mapaDNI.set("12345678A", "Juan Pérez");
mapaDNI.set("87654321B", "María López");
mapaDNI.set("98765432C", "Pedro Ramírez");
mapaDNI.set("54321678D", "Laura González");
mapaDNI.set("87654321E", "Carlos Martínez");
mapaDNI.set("34567890F", "Ana Sánchez");
mapaDNI.set("67890123G", "David Rodríguez");
mapaDNI.set("23456789H", "Elena García");
mapaDNI.set("78901234I", "Javier Fernández");
mapaDNI.set("45678901J", "Sofía Jiménez");

// Mostrar todos los DNI y nombres en pantalla
document.write("<p>Lista de DNI y Nombres:</p>");
mapaDNI.forEach((nombre, dni) => {
  document.write(`<p>${dni}: ${nombre}</p>`);
});

// Modificar el nombre de la tercera persona
const dniModificar = "98765432C";
const nuevoNombre = "Roberto González";
mapaDNI.set(dniModificar, nuevoNombre);

// Mostrar la lista actualizada
document.write("<p>Lista de DNI y Nombres Actualizada:</p>");
mapaDNI.forEach((nombre, dni) => {
  document.write(`<p>${dni}: ${nombre}</p>`);
});
