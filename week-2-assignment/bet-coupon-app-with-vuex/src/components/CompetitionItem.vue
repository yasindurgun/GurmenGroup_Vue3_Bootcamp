<template>
    <div class="competition-item">
        <div class="info--container">
            <span class="font-weight-bold">{{match.homeowner}} x {{match.away}}</span>
            <small class="text-muted mt-5"><i>Saat : {{match.hour}}</i></small>
        </div>
        <div class="rates">
            <div class="rate-item">
                <button class="btn-sm" @click="addMathItem('1',match.homewin)">{{match.homewin}}</button>
            </div>
            <div class="rate-item">
                <button class="btn-sm" @click="addMathItem('0',match.draw)">{{match.draw}}</button>
            </div>
            <div class="rate-item">
                <button class="btn-sm" @click="addMathItem('2',match.awaywin)">{{match.awaywin}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["match"],
    methods:{
         addMathItem(side,ratio){
             console.log(ratio);
            let match={
                id:this.match.id,
                homeowner:this.match.homeowner,
                away:this.match.away,
                ratio:ratio,
                hour:this.match.hour,
                side:side,         
            }
            console.log(match);      
            this.$store.dispatch('coupon/addMatch',match)
        }
    },
}
</script>