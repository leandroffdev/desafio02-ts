export const Login = (email: string, password: string): void => {
      if(email !== '' && password !== '') {
            window.alert('Bem vindo(a)!');
      } else {
            window.alert('Preencha todos os campos!');
      }
}
