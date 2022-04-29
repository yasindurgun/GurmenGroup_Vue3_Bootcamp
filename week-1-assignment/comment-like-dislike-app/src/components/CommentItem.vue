<template>
<div class="card mb-10 comment--item">
          <p>
             {{comment.content}} 
          </p>
          <div class="action--button--container text-right mt-10">
            <!-- <button @click="comment.like++" class="btn-sm btn-success" :id="comment">Beğendim ({{comment.like}})</button> -->
            <button @click="likeComment(comment)" class="btn-sm btn-success" :id="comment" :key="comment">Beğendim ({{ comment.like }})</button>
            <button @click="dislikeComment(comment)" class="btn-sm btn-danger" :id="comment" :key="comment">Beğenmedim ({{ comment.dislike }})</button>
          </div>
        </div>
</template>

<script>
 export default {
    //  props : ["comment", "like","dislike"],
     props : ["comment"],
     inject: ["provideData"],
    methods: {
        likeComment(comment){
            //console.log(comment.like)
            comment.like++;
            //console.log("like")
        },
        dislikeComment(comment){
            //console.log(comment.dislike)
            comment.dislike++;
            //console.log("dislike")
        }
    }
 }
</script>