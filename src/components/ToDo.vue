<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.done ? 'completed' : '']"
    >
      <button @click="removeTodo(todo.id)" data-test="todo-remove">X</button>
      {{ todo.text }}
      <input type="checkbox" v-model="todo.done" data-test="todo-checkbox" />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      newTodo: "",
      todos: [
        { id: 1, text: "Learn Vue.js 3", done: true },
        //{ id: 2, text: "Learn testing Vue.js", done: false },
      ],
    };
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },

    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>
