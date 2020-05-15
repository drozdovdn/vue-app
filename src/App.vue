<template>
  <div id="app">
    <header class="header">
      <h1>TodoList</h1>
      <p class="offer__title">
        Пример работы с Vue
      </p>
      <p class="offer__text">
        Загружаем TodoList c
        <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
        список дел и далее работаем с ним.
      </p>
    </header>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  padding: 20px;
  background: #4e5ba6;
  color: #f2f2f2;
}
.offer__title {
  text-transform: uppercase;
}
.offer__text a {
  color: #f2f2f2;
  transition: all 0.5s ease;
}
.offer__text a:hover {
  color: #00ee00;
}
</style>
