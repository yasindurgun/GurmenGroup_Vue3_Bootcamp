<template>

 <div class="form-group justify-content-center align-items-center" style="background-color: #efefef;">
        <label for="">Title: </label>
        <input type="text" v-model="bookmark.title" id="bookmark.title">
        <label for="">Description: </label>
        <input type="text" v-model="bookmark.description" id="bookmark.description">
        <label for="">Link: </label>
        <input type="text" v-model="bookmark.link" id="bookmark.link">

        <button @click="addBookMark(bookmark)" class="mt-20 mb-20">Save</button>
      </div>
</template>

<script>
    export default {
    props: {
        addBookMark: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            bookmark: {title:"",description:"",link:""}
        }
    }
}
</script>