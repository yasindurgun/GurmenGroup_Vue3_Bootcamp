<template>
<div class="card card-light mt-20">
          <h3>Aktif Kurslarım</h3>
          <ul class="list mt-20">
          <TodoListItem v-for="todo in provideData.todoList" :key="todo.id" :item="todo"/>
          </ul>
        </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
    inject: ["provideData"],
    components: {
        TodoListItem
    }
}
</script>