<template>
<div class="card card-light multiply--container mt-20">
            <h4 class="text-center mb-10">Mislini Seç</h4>
            <div class="multiply--buttons mb-10 d-flex justify-content-center align-items-center">
              <button @click="times2=5;" class="btn-sm">5</button>
              <button @click="times2=10;" class="btn-sm">10</button>
              <button @click="times2=20;" class="btn-sm">20</button>
              <button @click="times2=30;" class="btn-sm">30</button>
              <button @click="times2=50;" class="btn-sm">50</button>
              <button @click="times2=100;" class="btn-sm">100</button>
              <button @click="times2=200;" class="btn-sm">200</button>
              <button @click="times2=500;" class="btn-sm">500</button>
              <button @click="times2=1000;" class="btn-sm">1000</button>
              <button @click="times2=1500;" class="btn-sm">1500</button>
              <button @click="times2=2500;" class="btn-sm">2500</button>
            </div>
            <div class="coupon--total--container mt-20">
              <div class="d-flex justify-content-between align-items-center font-weight-bold">
                <span>Toplam Oran</span>
                <span class="text-info">{{returnTotal}}</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-5">
                <span>Kupon Tutarı</span>
                <span class="font-weight-bold">10,00 TL</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-5">
                <span>Tahmini Kazanç</span>
                <span class="font-weight-bold text-info">450,00 TL</span>
              </div>
            </div>
          </div>
          <!-- <h1>{{times2}}</h1> -->
</template>

<script>
  export default {
    props: ["totalRatio"],
    inject: ["provideData", "calculateTotalRatio"],
    data() {
      return {
        times2 :0,
      }
    },
    computed: {
      timesWatch(){
        return this.times2;
      },
      returnTotal() {
        return this.totalRatio;
      }
      
    }
  }
</script>