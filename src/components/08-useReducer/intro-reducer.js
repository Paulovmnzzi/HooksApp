const inicialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const toDoFuncion = (state = inicialState, action) => {





    return state;
}

let toDos = toDoFuncion;

const newToDo = [{
    id: 2,
    todo: 'Comprar leche',
    done: false
}]

const action = {
    type: 'agregar',
    payload: newToDo
}








console.log(toDos);