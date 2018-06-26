<template>
    <div class="dakuang">
        <div class="gaodu" @click="bianhuan"   ref="bianhuan">
            <span @scroll="scroll">12</span>
             <span>12</span>
              <span>12</span>

               <span>12</span>
                <span>12</span>
                
                 <span>12</span>
                  <span>12</span>
                   <span>12</span>
                    <span>12</span>
                     <span>12</span>
                      <span>12</span>
                       <span>12</span>
                        <span>12</span>
                         <span>12</span>

        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
             pos: 0
        }
    },
    methods: {
        bianhuan() {
            console.log('12312')
        },
         scroll(event) {
                this.pos = event.target.scrollTop
                console.log('scroll', event.target.scrollTop)
         },
         handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            console.log(scrollTop)
        },
    },
    mounted () {
    window.addEventListener('scroll', this.handleScroll)
    },
}       
</script>

<style lang="less">
    .dakuang{
        height:100%;
        width: 100%;
        overflow-y: auto;

        .gaodu{
        height: 4000px;
        width: 100%;
        }
        span{
            width: 100%;
            height: 400px;
            display: block
        }
    }
    

</style>
