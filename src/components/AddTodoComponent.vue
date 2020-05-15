<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Новая задача..." />
    <button class="btn" type="submit">
      Создать
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };
        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input {
  width: 100%;
  padding: 10px;
  /*border: none;*/
  border: 1px solid #3747a6;
  border-radius: 0.25em;
}
.btn {
  /*margin-left: 10px;*/
  text-transform: uppercase;
  font-size: 12px;
  background: #00c500;
  border: 2px solid #00c500;
  color: #f2f2f2;
  transition: all 0.5s ease;
  border-radius: 0.25em;
  cursor: pointer;
}


</style>
