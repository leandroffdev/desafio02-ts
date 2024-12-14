import { Login } from './login';

import {describe, expect} from '@jest/globals';

describe('login', () => {
    it('Deve retornar a mensagem de boas vindas', () => {
        const result = Login('email', 'senha'); // Chama a função
        expect(result).toHaveBeenCalledWith(/Bem vindo(a)/i); // Verifica o retorno
    });
});

