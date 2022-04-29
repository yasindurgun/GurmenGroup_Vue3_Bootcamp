<template>
 <header>Comment Like/Dislike App</header>
    <div class="container">
      <div class="comment--like--dislike--app">

        <CommentItem :like="like" :dislike="dislike" v-for="comment in provideData.comments" :key="comment.id" :comment="comment"/>


      </div>
    </div>
</template>

<script>
import CommentItem from "@/components/CommentItem"
export default {
components : {
    CommentItem
  },
  data(){
    return {
      provideData: {
      comments: [
        {id: 1, content: "Güzel şehir.", like: 0, dislike: 0},
        {id: 2, content: "Muazzam tatlı", like: 0, dislike: 0},
        {id: 3, content: "Bozuk ürün", like: 0, dislike: 0},
      ]
      }
    };
  },
  provide(){
    return {
      provideData: this.provideData.comments
    }
  },
  // computed : {
  //        like() {
  //            console.log("deneme");
  //            return this.provideData.comments.like;
  //        },
  //        dislike(){
  //            return this.provideData.comments.dislike;
  //        }
  //    }
}
</script>