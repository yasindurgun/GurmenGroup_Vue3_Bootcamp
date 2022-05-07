<template>
<div class="container">
 <div class="bet--coupon--app d-flex justify-content-between align-items-start">
    <CompetitionItemList :competitions="matches"/>
    <CouponSection :couponList="coupons" />
 </div>
 </div>
</template>

<script>
import { mapGetters} from "vuex"
import CompetitionItemList from "@/components/CompetitionItemList"
import CouponSection from "@/components/CouponSection"
export default {
  components:{
    CompetitionItemList,
    CouponSection
  },
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters({
        matches:"competition/_getList",
        coupons:"coupon/_getList"
    })
  }
}
</script>