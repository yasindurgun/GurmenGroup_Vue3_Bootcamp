<template>
<div class="card">
          <div class="user--action--container">
            <div class="form-group">
              <label>Kursun Adı</label>
              <input v-model="itemText" type="text" id="itemText"/>
            </div>
            <button @click="addNewItem(itemText)" class="btn-primary">Kurs Ekle</button>
          </div>
        </div>
</template>

<script>

export default {
    props: {
        addNewItem: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            itemText: null,
        }
    }
}
</script>