const app = Vue.createApp({
    data() {
        return {
            // fruitList: ["Elma", "Armut", "Kiraz"],
            fruitList: [{ id : 1, text : "Elma", checked : true}, { id : 2, text : "Çay", checked : false}, { id : 3, text : "Karpuz", checked : false}],
            todoValue: null
        }
    },
    methods: {
        addNewTodo() {
            if (this.todoValue == null || this.todoValue =="") {
                alert("Text boş olamaz.");
            }
            else{
            this.fruitList.push({
                text : this.todoValue,
                id : new Date().getTime()
            });
            this.todoValue = null;
        }
        },
        press(e){
            console.log(e)
            if(e.keyCode === 13) this.addNewTodo();
        },
        deleteItem(item) {
            console.log(item);
             this.fruitList = this.fruitList.filter(fruit => fruit !== item)
            // this.fruitList.splice(itemIndex, 1);
        }
    },
    computed : {
        totalCount(){
            return `${this.fruitList.length} adet kayıt vardır`
        },
        checkedItem(){
            return this.fruitList.filter(f => f.checked).length;
        },
        uncheckedItem(){
            return this.fruitList.filter(f => !f.checked).length;
        }
    }
})
app.mount("#app")
