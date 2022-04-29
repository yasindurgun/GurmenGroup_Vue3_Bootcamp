<template>

          <div class="card my-coupon">
            <div class="card--header">
              <h4>Kuponum</h4>
            </div>
            <couponItem v-for="item in provideData.coupons" :key="item.id" :item="item"/>
          </div>
</template>

<script>
import couponItem from "@/components/couponItem";
export default {
  inject: ["provideData"],
    components: {
        couponItem
    }
}
</script>