<template>
    <div class="card competition-list mr-10">
    <div class="card--header">
      <h4>Yakın Zamanda Başlayacak Müsabakalar</h4>
    </div>
    <div class="card--body">
      <CompetitionItem v-for="match in competitions" :key="match.id" :match="match" />
    </div>
  </div>
</template>

<script>
import CompetitionItem from "@/components/CompetitionItem"
export default {
    components:{
        CompetitionItem
    },
    props:["competitions"]
}
</script>