<template>
<header>Bookmark App</header>
 <AddBookMarkItemSection :addBookMark="addBookMark"/>
    <div class="container">
      
      <div class="bookmark--app--container">
        
        <BookmarkItem v-for="bookmark in provideData.BookmarkItems" :key="bookmark.id" :item="bookmark"/>

      </div>
    </div>
</template>

<script>
import BookmarkItem from "@/components/BookmarkItem";
import addBookMarkItemSection from "@/components/addBookMarkItemSection";
import AddBookMarkItemSection from "./components/addBookMarkItemSection.vue";

export default {
  data(){
    return {
      provideData : {
        BookmarkItems: [
        {id: 1, title: "Google", description: "Açıklama 1", link:"https://www.google.com/", clicked:false},
        {id: 2, title: "Facebook", description: "Açıklama 2", link:"https://www.facebook.com/", clicked:false},
        {id: 3, title: "Linkedin", description: "Açıklama 3", link:"https://www.linkedin.com/", clicked:false},
        {id: 4, title: "Instagram", description: "Açıklama 4", link:"https://www.instagram.com/", clicked:false},
        {id: 5, title: "Twitch", description: "Açıklama 5", link:"https://www.twitch.tv/", clicked:false}
      ]
      }
    };
  },
  components: {
    BookmarkItem,
    addBookMarkItemSection,
    AddBookMarkItemSection
},

    provide() {
      return {
        provideData: this.provideData,
        addBookMark: this.addBookMark,
        deleteBookmark: this.deleteBookmark,
      }
    },

    methods: {
      deleteBookmark(bookmark){
        this.provideData.BookmarkItems = this.provideData.BookmarkItems.filter((b) => b != bookmark);
      },
      addBookMark(bookmark){
        if(bookmark.title != "" && bookmark.description != "" && bookmark.link != ""){
          this.provideData.BookmarkItems.push({
            id: new Date().getTime(),
            title: bookmark.title,
            description: bookmark.description,
            link: bookmark.link,
            clicked: false
          })
        }
        bookmark.title="";
        bookmark.description = "";
        bookmark.link="";
      },
      clearInputs(){

      }
    }
}
</script>