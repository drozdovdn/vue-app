<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button class="btn" v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    uppercase(value) {
      console.log(value);
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0.5em 2rem;
  margin-bottom: 1rem;
}
input {
  margin-right: 1rem;
}
.btn {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: 600;
  border: none;
}
.done {
  text-decoration: line-through;
}
</style>
