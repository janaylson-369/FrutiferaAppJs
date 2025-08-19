# FrutiferaAppJs
# 🌱 FrutiferaAppJs

O **FrutiferaAppJs** é uma aplicação web desenvolvida para o gerenciamento de árvores frutíferas.  
Com este sistema, os usuários podem **registrar, visualizar e pesquisar** informações detalhadas sobre suas fruteiras, incluindo **nome popular, nome científico, produção média e data de plantio**.

---

## 🎨 Visão Geral
A aplicação é composta por duas páginas principais:

- **Página Inicial (index.html):**  
  Apresenta um carrossel de imagens e uma seção para exibir os cards das fruteiras cadastradas.

- **Página de Cadastro (cadastroFrut.html):**  
  Contém um formulário para adicionar novas fruteiras e uma tabela para listar todas as fruteiras registradas, juntamente com uma funcionalidade de busca.

---

## ✨ Funcionalidades
- **Cadastro de Fruteiras:** Formulário intuitivo para adicionar novas espécies de fruteiras com informações como nome popular, nome científico, produção média por safra e data de plantio.  
- **Listagem e Visualização:** As fruteiras cadastradas são exibidas em uma tabela clara e organizada, mostrando todos os detalhes importantes, incluindo a idade calculada em meses.  
- **Busca Dinâmica:** Funcionalidade de pesquisa que permite ao usuário encontrar fruteiras rapidamente pelo nome popular ou científico.  
- **Interface Amigável:** Design limpo e responsivo desenvolvido com **Bootstrap**, proporcionando uma ótima experiência de usuário em diferentes dispositivos.  
- **Notificações:** Utiliza a biblioteca **Toastify-js** para fornecer feedback visual ao usuário sobre as ações realizadas.  

---

## 🛠️ Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Para a estrutura das páginas web.  
- **CSS3:** Para estilização, com arquivos dedicados como `index.css` e `footer.css`.  
- **JavaScript:** Para toda a lógica de manipulação do DOM, interatividade e gerenciamento de dados.  
- **Bootstrap (v5.3.7):** Framework CSS para a criação de um layout responsivo e componentes de interface modernos.  
- **Bootstrap Icons (v1.13.1):** Biblioteca de ícones SVG.  
- **jQuery (v3.7.1):** Biblioteca JavaScript para simplificar a manipulação de eventos, animações e requisições AJAX.  
- **Toastify-js (v1.12.0):** Biblioteca para a exibição de notificações "toast" não intrusivas.  

---

## 📂 Estrutura do Projeto

/
├── assets/
│ ├── css/
│ │ ├── footer.css
│ │ └── index.css
│ └── image/
│ ├── (imagens do projeto como LOGO.png, etc.)
├── SRC/
│ ├── dataset/
│ ├── cadastroFrut.js
│ └── index.js
├── .gitignore
├── cadastroFrut.html
├── index.html
├── package.json
└── package-lock.json
