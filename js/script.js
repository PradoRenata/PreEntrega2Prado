//Usuarios
let savedUser = "UserTest";
let savedPass = "Secret123";

// const users = {
//     savedUser : "UserTest",
//     savedPass : "Secret123"
// };

//Libros
const books = [
    { title:"Cien años de soledad", autor:"Gabriel García Márquez"},
    { title:"Tengo miedo torero", autor:"Pedro Lemebel"},
    { title:"Solanin",autor:"Inio Asano"},
    { title:"Fundación", autor:"Isaac Asimov"}];

//Funcion Mostrar libros
const showBooks = () => {

    let text = "\nLibros en mi lista: \n";

    books.map((book) => {
        text += `\n Titulo: ${book.title} \n Autor: ${book.autor} \n`
    });

    alert(text);
}

//Funcion Agregar libros
const addBook = () => {

    const getTitle = () => {
        let title = prompt ("Ingresa el título del libro que quieres agregar.");
        if (title ===  " ") {
            alert("El titulo no puede estar vacío.")
            return getTitle;
        }
        return title;
    }

    const getAutor = () => {
        let autor = prompt ("Ingresa el autor del libro que agregaste, por favor.");
        if (autor ===  " ") {
            alert("El Autor no puede estar vacío.")
            return getAutor;
        }
        return autor;
    }

    let title = getTitle();
    let autor = getAutor();

    const newBook = {
        title : title,
        autor : autor,
    };

    books.push(newBook);

    showBooks();
}

//Menu
const menuOptions = [
    { number:"1", title:"Ver lista de libros.", function: showBooks},
    { number:"2", title:"Agregar un libro.", function: addBook},
    { number:"3", title:"Cerrar sesión",function: null}
];

const menu = () => {
    let options = "";
    for (const option of menuOptions) {
        options += `${option.number} - ${option.title} \n`;
    }
    const selectOption = prompt (`Selecciona una opción: \n${options}`)
    
    const selection = menuOptions.find(option => option.number === selectOption);

    if(selection) {
        
        if(selection.function) {
            selection.function();
        } else {
            alert (`Seleccionaste: ${selection.title}`);
        }
        if (selection.number !== "3") {
            menu();
        } else {
            alert("Vuelve pronto!");
        }
    } else {
        alert('Elegiste una opción inválida. Por favor intenta otra vez.');
        menu();
    }
}

// -----------------------------------------------------------------

alert("Bienvenido a un simulador para gestionar tus lecturas pendientes.")

function login(){
    let access =false;

    let userName = prompt ("Ingresa tu nombre de usuario.");
    while (userName != savedUser){
        alert("No es un usuario registrado.");
        userName = prompt ("Ingresa tu nombre de usuario.");
    }

    let attempts = 3;
    for (let i = attempts ; i > 0 ; i--) {
        let userPass = prompt ("Ingresa tu contraseña para ingresar. Tienes "+i+" intentos.")
        if (userPass === savedPass){
            alert("ingreso exitoso.");
            access = true;
            break;
        }else{
            alert("Contraseña incorrecta, te quedan "+(i-1)+" intentos.")
        }
    }
    return access;
}

if (login()) {
    
    menu();

}else{
    alert("Cuenta bloqueada temporalmente, intenta de nuevo más tarde.")
}



