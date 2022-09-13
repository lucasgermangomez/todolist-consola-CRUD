const read = require('./crud/read');
const create = require('./crud/create');
const updateTask = require('./crud/update');
const deleteTask = require('./crud/delete');

const comando = process.argv[2];

if (!comando) {
    console.log("Olvidaste ingresar la accion por consola");
    return;
};

switch(comando) {
    case "list": {
        data = read();

        console.log("LISTADO DE TAREAS:");
        console.log("------------------");
        console.log("                  ");
        for (task of data) {
            console.log(`Nombre: ${task.title}`);
            console.log(`Descripcion: ${task.desc}`);
            console.log("----------------------");
        }
        break;
    }
    case "add": {
        const title = process.argv[3];
        const desc = process.argv[4];

        if (!title || !desc) {
            console.log("Olvidaste ingresar titulo o descripcion");
            return;
        }


        const isOk = create(title, desc);
        
        if(isOk) {
            console.log("Tarea agregada con exito!");
        } else {
            console.log("Ha ocurrido un error");
        }
        break;
    }
    case "edit": {
        const title = process.argv[3];
        const desc = process.argv[4];

        if(!title || !desc) {
            console.log("Olvidaste ingresar el titulo o la nueva descripción");
            return;
        }

        const isOk = updateTask(title, desc);

        if (isOk) {
            console.log(`Se editó la tarea ${title} correctamente`);
        } else {
            console.log("No se encontró el titulo ingresado en la base de datos");
        }

        break;

    }
    case "delete": {
        const title = process.argv[3];

        if (!title) {
            console.log("Debe ingresar un título para continuar");
            return;
        }

        const deleteOk = deleteTask(title);

        if (deleteOk) {
            console.log(`La tarea: ${title} fué eliminada correctamente.`);
        } else {
            console.log('El titulo ingresado no corresponde a ninguna tarea existente');
        }
        break;
    }
    default: {
        "No ingresó un comando correcto";
    }
};