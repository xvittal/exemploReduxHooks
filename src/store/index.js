//congiguração básica da store, das action e dos reduces
//tentar depois fazer isso aqui de forma externa, deixando apenas o store aqui

import { createStore } from 'redux';

//=> esse valor que stá sendo passado é uma das possiveis formas, salvando-as em variaveis iniciais.
const INITIAL_STATE = { //=> objeto inicial do reducer no caso (action é uma função que retorna um objeto)
    data: [
        'Teste 1',
        'teste 2',
        'teste 3',
        'teste 4',
        'teste 5'
    ],
};

function testes(state = INITIAL_STATE, action){ //=> reducer
    switch (action.type) {
        //=> condição para disparar a action
        case 'ADD_TESTE': 
            //=> seta o valor dentro do estado, passando um novo estado para o objeto desejado
            return {...state, data: [...state.data, action.title]}; 
        default:
            //=> retorno padão do reducer
            return state;
    }
}

const store = createStore(testes); //=> loja com todos (no caso uma aqui!) os reducers

export default store;