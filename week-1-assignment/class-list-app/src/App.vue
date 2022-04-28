<template>

  <header>Class List App</header>
    <div class="container">
      <div class="class--list--app">
        <div class="card">
          <ul class="class-list">
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxList[0].id" v-model="checkBoxList[0].checked"/>
                <span>Background Color</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxList[1].id" v-model="checkBoxList[1].checked"/>
                <span>Border</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxList[2].id" v-model="checkBoxList[2].checked"/>
                <span>Border Radius</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxList[3].id" v-model="checkBoxList[3].checked"/>
                <span>Color</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxList[4].id" v-model="checkBoxList[4].checked"/>
                <span>Font Bold</span>
              </label>
            </li>
            <li>
              <label>
                <input class="mr-5" type="checkbox" :id="checkBoxList[5].id" v-model="checkBoxList[5].checked"/>
                <span>Font Italic</span>
              </label>
            </li>
          </ul>

          <textarea rows="5" cols="70" :class="textAreaClasses">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque?
          </textarea>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
        data(){
          return {
            checkBoxList: [
              {id: 1, checked: false,},
              {id: 2, checked: false,},
              {id: 3, checked: false,},
              {id: 4, checked: false,},
              {id: 5, checked: false,},
              {id: 6, checked: false,}
            ],
          };
        },

        computed : {
          textAreaClasses(){
            return {
            textareaBackground: this.checkBoxList[0].checked, 
            textareaBorder: this.checkBoxList[1].checked,
            textareaBorderRadius: this.checkBoxList[2].checked,
            textareaColor: this.checkBoxList[3].checked,
            textareaFontBold: this.checkBoxList[4].checked,
            textareaFontItalic: this.checkBoxList[5].checked
            }
          }
        }
  }
</script>

<style>
.textareaBackground{
  background-color: rebeccapurple;
}
.textareaBorder{
  border: 5px solid black;
}
.textareaBorderRadius{
  border-radius: 20px;
}
.textareaColor {
  color: red;
}
.textareaFontBold {
  font-weight: bold;
}
.textareaFontItalic{
  font-style: italic;
}
</style>