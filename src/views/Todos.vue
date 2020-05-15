<template>
  <div>
    <h2>Todos Page</h2>
    <router-link class="button" to="/">Home</router-link>
    <section class="container">
      <div class="options">
        <AddTodoComponent @add-todo="addTodo" />
        <div class="select">
          <select class="filter" v-model="filter">
            <option class="option" value="all">Все</option>
            <option class="option" value="completed">Выполненные</option>
            <option class="option" value="not-completed">Не выполненные</option>
          </select>
        </div>
      </div>
      <Loader v-if="loading" />
      <TodoList
          v-else-if="filteredTodos.length"
          v-bind:todos="filteredTodos"
          @remove-todo="removeTodo"
      />
      <p v-else>No todos!</p>
    </section>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodoComponent from "@/components/AddTodoComponent";
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all"
    };
  },
  // watch: {
  //     filter(value) {
  //         console.log(value)
  //     }
  // },
  computed: {
    filteredTodos() {
      if (this.filter === "completed") {
        return this.todos.filter(t => t.completed);
      } else if (this.filter === "not-completed") {
        return this.todos.filter(t => !t.completed);
      } else return this.todos;
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(json => {
        this.todos = json;
        this.loading = false;
      });
  },
  components: {
    TodoList: TodoList,
    AddTodoComponent: AddTodoComponent,
    Loader: Loader
  }
};
</script>

<style>
.container {
  width: 70%;
  margin: 0 auto;
}
.filter {
  -webkit-appearance: none;
  outline: none;
  box-shadow: none;
  background: #4e5ba6;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 0.5em;
  color: #f2f2f2;
  font-size: 1em;
  letter-spacing: 0.8px;
  cursor: pointer;
}
.select {
  margin-top: 10px;
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
  background: #4e5ba6;
  overflow: hidden;
  line-height: 3;
  border-radius: 0.25em;
}
.select::after {
  content: '\25bc';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: #5c6bc4;
  pointer-events: none;
}
option {
  padding: 10px 0;
}
.options {
  margin: 30px 0 40px;
}
</style>
