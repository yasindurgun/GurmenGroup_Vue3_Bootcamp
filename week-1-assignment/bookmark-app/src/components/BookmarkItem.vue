<template>
    <div class="bookmark-item">
          <div class="header">
            <h3>{{item.title}}</h3>
            <button @click="deleteBookmark(item)" class="btn-sm btn-danger">Kaydı Sil</button>
          </div>
          <p class="mt-20 mb-20">{{item.description}}</p>
          <button @click="gotoWebSite(item)" class="btn-primary btn-sm" id="item.id">Göster</button>
        </div>
</template>

<script>
export default {
    data(){
    },
    methods: {
        gotoWebSite(item){
            //alert();
            // window.open("https://www.google.com/","_blank");
            window.open(item.link,"_blank");
        }
    },
    props : ["item"],
    inject : ["provideData", "deleteBookmark"]
}
</script>