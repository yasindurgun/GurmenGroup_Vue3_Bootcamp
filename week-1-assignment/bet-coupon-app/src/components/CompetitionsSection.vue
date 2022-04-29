<template>

<div class="card competition-list mr-10">
          <div class="card--header">
            <h4>Yakın Zamanda Başlayacak Müsabakalar</h4>
          </div>
          <div class="card--body">
            <competitionItem v-for="item in provideData.competitions" :key="item.id" :item="item" />
          </div>
        </div>
</template>

<script>
import competitionItem from "@/components/competitionItem";
export default {

  inject: ["provideData"],

  components: {
    competitionItem
}
}
</script>