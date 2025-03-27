# POSTECH - Desafio Aula Inaugural

Este é um projeto desenvolvido para a aula inaugural do curso de Full Stack Development da FIAP. O projeto consiste em um formulário web que permite coletar informações de um grupo de alunos.

## Funcionalidades

- Formulário para coletar informações de até 5 membros do grupo
- Campo para história do grupo
- Validação de campos obrigatórios
- Envio de dados para API externa
- Interface responsiva e moderna
- Efeito de fade-in ao carregar a página

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- API REST (https://fsdt-contact.onrender.com/contact)

## Estrutura do Projeto

```
.
├── index.html      # Estrutura HTML da página
├── style.css       # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este arquivo
```

## Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Preencha os campos do formulário com as informações do grupo
4. Clique em "Enviar" para submeter os dados

## Formato dos Dados

O formulário envia os dados no seguinte formato:

```json
{
    "names": ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5"],
    "message": "História do grupo"
}
```

## Requisitos

- Navegador web moderno com suporte a JavaScript ES6+
- Conexão com internet para envio dos dados

## Desenvolvido por

Leonan Maycon Bromerchenkel - RM362440
Anderson Tavares de Lima - RM363563
João Vitor Casemiro - RM362682
Gustavo do Prado Partica - RM362377
cadu santana - RM361348

## Licença

Este projeto está sob a licença MIT.
