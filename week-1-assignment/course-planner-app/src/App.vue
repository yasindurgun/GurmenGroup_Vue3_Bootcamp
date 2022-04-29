<template>
<header>Kurs Planlaması</header>
    <div class="container">
      <div class="course--planner-app--container">
        
        <AddSection :addNewItem="addNewItem"/>
        <TodoListSection/>
        <ResultBar :unWatchedCourseCount="unWatchedCourseCount" :watchedCourseCount="watchedCourseCount"/>
        
        
      </div>
    </div>
</template>

<script>

import AddSection from "@/components/AddSection";
import TodoListSection from "@/components/TodoListSection";
import ResultBar from "@/components/ResultBar";

  export default {
  components: {
    AddSection,
    TodoListSection,
    ResultBar
    },
    data() {
    return  {
      provideData : {
        todoList: [
       {id: 1, text: "Vue.js", checked:true},
       {id: 2, text: "Angular.js", checked:true},
       {id: 3, text: "React.js", checked:false}
      ],
      
      }
    };
  },

  provide(){
    return {
      provideData: this.provideData
    };
  },
  methods: {
    addNewItem(item){
      //console.log(this.provideData.todoList);
      this.provideData.todoList.push({
        id: new Date().getTime(),
        text: item,
        checked: false
      });
    }
  },
  computed: {
    unWatchedCourseCount(){
      return this.provideData.todoList.filter((c) => !c.checked).length;
    },
    watchedCourseCount(){
      return this.provideData.todoList.filter((c) => c.checked).length;
    }
  }
  }
</script>