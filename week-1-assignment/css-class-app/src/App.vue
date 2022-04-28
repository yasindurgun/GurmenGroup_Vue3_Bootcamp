<template>
  <!-- <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>CSS Class App</title>
    <link rel="stylesheet" href="../../assets/style.css" />
    <link rel="stylesheet" href="../../assets/app.css">
  </head>
  <body> -->
    <header>CSS Class App</header>
    <div class="container css--class--app">
      <div class="card text-center">
        <ul class="css--palette text-center">
          <li @click="clickedForRed" :style="{backgroundColor : listElements[0].color}"></li>
          <li @click="clickedForGreen" :style="{backgroundColor : listElements[1].color}"></li>
          <li @click="clickedForBlue" :style="{backgroundColor : listElements[2].color}"></li>
        </ul>
        <div class="result-box result-background" :class="showBgClass">
        </div>
      </div>
    </div>
  <!-- </body> -->
</template>

<style>
.result-background{
  background-color: rebeccapurple;
}
</style>

<script>

    export default {
        data(){
          return {

            listElements: [
              {color: "red", selected: false, pointer:"auto"},
              {color: "green", selected: false, pointer:"auto"},
              {color: "blue", selected: false, pointer:"auto"}
              ],
          };
        },
        methods: {
          clickedForRed(){

            this.listElements[0].selected= true;
            this.listElements[1].selected= false;
            this.listElements[2].selected= false;
            this.listElements[0].pointer= "none";
            this.listElements[1].pointer= "auto";
            this.listElements[2].pointer= "auto";
          },
          clickedForGreen(){

            this.listElements[0].selected= false;
            this.listElements[1].selected= true;
            this.listElements[2].selected= false;
            this.listElements[0].pointer= "auto";
            this.listElements[1].pointer= "none";
            this.listElements[2].pointer= "auto";
          },
          clickedForBlue(){
            this.listElements[0].selected= false;
            this.listElements[1].selected= false;
            this.listElements[2].selected= true;
            this.listElements[0].pointer= "auto";
            this.listElements[1].pointer= "auto";
            this.listElements[2].pointer= "none";
          }
        },
        computed : {
        showBgClass(){
          
            return {red: this.listElements[0].selected, green: this.listElements[1].selected, blue:this.listElements[2].selected};
        }
    }
    }
</script>




