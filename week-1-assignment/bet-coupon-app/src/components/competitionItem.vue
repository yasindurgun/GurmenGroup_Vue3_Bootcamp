<template>
<!-- <div class="competition-item">
              <div class="info--container">
                <span class="font-weight-bold">{{competition.home}} x {{competition.away}}</span>
                <small class="text-muted mt-5"><i>{{competition.time}}</i></small>
              </div>
              <div class="rates">
                <div class="rate-item">
                  <button class="btn-sm">{{competition.ms1}}</button>
                </div>
                <div class="rate-item">
                  <button class="btn-sm">{{competition.ms0}}</button>
                </div>
                <div class="rate-item">
                  <button class="btn-sm">{{competition.ms2}}</button>
                </div>
              </div>
            </div> -->

            <div class="competition-item">
              <div class="info--container">
                  <!-- <h1>{{item.home}}</h1> -->
                <span class="font-weight-bold">{{item.home}} x {{item.away}}</span>
                <small class="text-muted mt-5"><i>{{item.time}}</i></small>
              </div>
              <div class="rates">
                <div class="rate-item">
                  <button @click="addItemToCoupon(item,item.ratio1.result, item.ratio1.ms1)" class="btn-sm" :disabled="item.ratio1.selected">{{item.ratio1.ms1}}</button>
                </div>
                <div class="rate-item">
                  <button @click="addItemToCoupon(item, item.ratio0.result, item.ratio0.ms0)" class="btn-sm" :disabled="item.ratio0.selected">{{item.ratio0.ms0}}</button>
                </div>
                <div class="rate-item">
                  <button @click="addItemToCoupon(item, item.ratio2.result, item.ratio2.ms2)" class="btn-sm" :disabled="item.ratio2.selected">{{item.ratio2.ms2}}</button>
                </div>
              </div>
            </div>
</template>

<script>
export default {
    props : ["item"],
    inject: ["addItemToCoupon"]
}
</script>