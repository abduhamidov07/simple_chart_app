<template>
  <section class="main">
    <div class="todoApp">
      <h1 class="siteTitle">Todo App</h1>
      <form class="addTodo" @submit.prevent="addTodo">
        <div class="formGroup">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="todoTitle" />
        </div>
        <div class="formGroup">
          <label for="content">Content:</label>
          <textarea id="content" v-model="newTodo"></textarea>
        </div>
        <button class="addBtn" @click="addTodo">Add</button>
      </form>

      <div class="todoList">
        <h2>Todo list</h2>
        <h3 v-if="todos.length == 0">Empty list</h3>
        <ul class="todos">
          <li v-for="todo in todos" :key="todo.id" class="todo">
            <div class="todoContent">
              <h5>
                Title: <span>{{ todo.title }}</span>
              </h5>
              <hr />
              <div class="todoInfo">
                <p><input type="checkbox">  {{ todo.content }}</p>
                <span>
                  <small>{{ todo.date }}</small>
                  <button class="deleteBtn" @click="deleteTodo(todo)">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div>
          <button
            v-if="todos.length > 0"
            class="deleteAllBtn"
            @click="deleteAll(todo)"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos() {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      this.todos = todos;
    },
    saveTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    addTodo() {
      if (this.newTodo.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.todoTitle,
          content: this.newTodo,
          date: new Date().toLocaleDateString(),
        };
        this.todos.unshift(newTodo);
        this.saveTodos();
        this.todoTitle = "";
        this.newTodo = "";
      }
    },
    deleteTodo(todo) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
        .then(() => {
          this.todos.splice(this.todos.indexOf(todo), 1);
          this.saveTodos();
        });
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Deleted successfully",
      });
    },
    deleteAll(todo) {
      this.todos.splice(0);
      this.saveTodos();
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

h1,
h2,
h3,
h4,
h5,
h6,
p,
hr {
  margin: 0;
}


button {
  cursor: pointer;
}

.main {
    font-family: 'Nunito', sans-serif;
  display: flex;
  justify-content: center;
}

.siteTitle {
  font-size: 35px;
  text-align: center;
}

.todoApp {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50%;
}

.addTodo {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.formGroup {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.formGroup > input,
textarea {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  outline: none;
  border: 1.8px solid gray;
  border-radius: 6px;
  padding: 8px;
  background: transparent;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.addBtn,
.deleteAllBtn {
  font-size: 20px;
  width: 100%;
  background-color: #765aec;
  color: #fff;
  border-radius: 8px;
  border: none;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.2s ease;
}

.addBtn:hover,
.deleteAllBtn:hover {
  background-color: #6458ee;
}

.todoList h2 {
  font-size: 35px;
  margin: 20px 0;
  text-align: center;
}

.todoList h3 {
  font-size: 24px;
  color: gray;
  text-align: center;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
}

.todo {
  border: 1px solid gray;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  list-style-type: none;
}

hr {
  border: none;
  border-bottom: 1px solid gray;
}

.todoContent h5 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.todoInfo {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.todoInfo span {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 15px;
}

.todoInfo button {
  font-size: 18px;
  border: none;
  background: none;
  outline: none;
}

.deleteAllBtn {
  margin: 25px 0;
}

/* ===== Responsive ===== */

@media (max-width: 1060px) {
  .todoApp {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .todoApp {
    width: 90%;
  }
}

</style>