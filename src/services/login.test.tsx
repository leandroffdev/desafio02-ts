import { Login } from './login';

import {describe, expect, test} from '@jest/globals';

describe('login', () => {
    function soma(a:number, b:number): number {
        return a + b;
    }
    it('Deve retornar a mensagem de boas vindas', () => {
        const result = Login('email', 'senha'); // Chama a função
        expect(result).toHaveBeenCalledWith(/Bem vindo(a)/i); // Verifica o retorno
    });

    test('adds 1 + 2 to equal 3', () => {
        expect(soma(1, 2)).toEqual(3);
    });
});

