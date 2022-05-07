<template>
 
<div class="coupon--total--container">
    <div class="card my-coupon">
        <div class="card--header">
            <h4>Kuponum</h4>
        </div>
            <div class="card--body">
                <CouponInformation v-for="coupon in couponList" :key="coupon.id" :coupon="coupon"/>
            </div>
    </div>
            <CouponResultSection/>
</div>

</template>

<script>
import CouponInformation from "@/components/CouponInformation"
import CouponResultSection from "@/components/CouponResultSection"
export default {
     props:["couponList"],
    components:{
        CouponInformation,
        CouponResultSection
    }
}
</script>