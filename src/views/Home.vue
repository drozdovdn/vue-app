<template>
  <div>
    <h2>Мое первое знакомство с Vue</h2>
    <p>
      На этом примере изучил основные Vue.js и расмотрел Vue Router. <br />

    </p>
    <p>
      Посмотреть сам список можно продя по кнопке Todos.
    </p>
    <router-link class="button" to="/todos">Todos</router-link>
  </div>
</template>

<script></script>

<style>
.button {
  background: #f25050;
  padding: 10px 20px;
  border: 2px solid #f25050;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.5s ease;
  color: #f2f2f2;
}
.button:hover {
  background: #f2f2f2;
  color: #f25050;
}
</style>
