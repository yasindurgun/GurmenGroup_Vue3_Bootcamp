<template>

<header>Bet Coupon App</header>
    <div class="container">
      <div class="bet--coupon--app d-flex justify-content-between align-items-start">


        <!-- Mac Listesi-->
        
      <CompetitionsSection/>

        <!-- Kuponum -->
        <div class="coupon--total--container">
      <couponListSection/>
      <couponResultSection :totalRatio="totalRatio" :totalPrice="totalPrice"/>
      </div>
      </div>
    </div>
</template>

<script>
import CompetitionsSection from "@/components/CompetitionsSection";
//import CouponSection from "./components/CouponSection.vue";
import couponListSection from "@/components/couponListSection";
import couponResultSection from "@/components/couponResultSection";

export default {
  components: {
    CompetitionsSection,
    couponListSection,
    couponResultSection
    //CouponSection
},

data() {
    return  {
      provideData : {
        competitions: [
       {id: 1, home: "Beşiktaş", away:"Fenerbahçe", time:"19:30", ratio1: {ms1:"1.50",result:1, selected: false}, ratio0:{ms0:"2.00", result:0, selected: false}, ratio2:{ms2:"2.50", result:2, selected: false}},
       {id: 2, home: "Fenerbahçe", away:"Galatasaray", time:"20:30", ratio1: {ms1:"3.50", result:1, selected: false}, ratio0:{ms0:"3.50", result:0, selected: false}, ratio2:{ms2:"3.00", result:2, selected: false}},
       {id: 3, home: "Galatasaray", away:"Beşiktaş", time:"21:30", ratio1: {ms1:"2.50", result:1, selected: false}, ratio0:{ms0:"3.00", result:0, selected: false}, ratio2:{ms2:"3.50", result:2, selected: false}}
      //  {id: 2, home: "Fenerbahçe", away:"Galatasaray", time:"20:30", ms1:"3.50",ms0:"c",ms2:"3.00"},
      //  {id: 3, home: "Galatasaray", away:"Beşiktaş", time:"21:30", ms1:"2.50",ms0:"3.00",ms2:"3.50"}
      ],
      coupons: [
      ]
      },
      times: 10,
      totalRatio :0,
      totalPrice: 0,
    };
  },

provide() {
    return {
      provideData: this.provideData,
      addItemToCoupon: this.addItemToCoupon,
      times: this.times,
      totalPrice: this.totalPrice
    };
  },

  methods :{
    addItemToCoupon(item, result, ratio){
      console.log(item);
      console.log("aaa",ratio);

      var isSame;
      if(result == 1) {
        item.ratio1.selected =true;
        item.ratio0.selected =false;
        item.ratio2.selected =false;
        isSame = this.provideData.coupons.filter((c) =>c.id == item.id);
        if(isSame.length == 1){
          this.provideData.coupons = this.provideData.coupons.filter(c => c.id != item.id);
        }
        console.log("issAME",isSame)
      }
      else if(result ==0){
        item.ratio1.selected =false;
        item.ratio0.selected =true;
        item.ratio2.selected =false;
        isSame = this.provideData.coupons.filter((c) =>c.id == item.id);
        if(isSame.length == 1){
          this.provideData.coupons = this.provideData.coupons.filter(c => c.id != item.id);
        }
        console.log("issAME",isSame)
      }
      else if(result == 2){
        item.ratio1.selected =false;
        item.ratio0.selected =false;
        item.ratio2.selected =true;
        isSame = this.provideData.coupons.filter((c) =>c.id == item.id);
        if(isSame.length == 1){
          this.provideData.coupons = this.provideData.coupons.filter(c => c.id != item.id);
        }
        console.log("issAME",isSame)
      }
      
      this.provideData.coupons.push({
        id : item.id,
        home: item.home,
        away: item.away,
        result: result,
        ratio: ratio,
        time: item.time,
      });

      this.calculateTotalRatio();
    },
    calculateTotalRatio(){
        // this.provideData.coupons.array.forEach(element => {
        //   this.totalRatio += element.ratio;
        // });
        this.totalRatio =0;
        for(var i=0; i<this.provideData.coupons.length; i++){
          this.totalRatio += Number(this.provideData.coupons[i].ratio);
        }
        console.log("this.totalRatio", this.totalRatio);
      },
    
  },

  
}
</script>