<template>
<!-- <ul class="list mt-20">
            <li class="course-item list-item bg-success">
              <span>{{item.text}}</span>
              <input type="checkbox" />
            </li>
            
          </ul> -->
            <li v-if="!item.checked" class="course-item list-item bg-danger">
              <span>{{item.text}}</span>
              <input type="checkbox" :id="item.id" v-model="item.checked"/>
            </li>
            <li v-else-if="item.checked" class="course-item list-item bg-success">
              <span>{{item.text}}</span>
              <input type="checkbox" :id="item.id" v-model="item.checked"/>
            </li>
</template>

<script>
export default {
    props: ["item"]
}
</script>