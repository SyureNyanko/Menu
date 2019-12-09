<template>
    <div class="SlotAnimation">
        <span v-if="start">
        <button v-on:click="slotStop()">STOP</button>
        </span>
        <span v-else>
         <button v-on:click="slotStart()">START</button>
        </span>
        </button>
        <div>
            {{ menu }}
        </div>
    </div>
</template>

<script>
import recipes from '../static/contents.json'


export default {
    data() {
        return {
            show : false,
            items: recipes,
            menu : "",
            count : 0,
            start : false
        }
    },
    created : function(){
        
    },
    methods:{
        nextMenu: function(){
            this.count = this.count + 1
            this.menu = this.items[this.count % this.items.length]['menu']
        },
        slotStart: function(){
            this.timer = setInterval(this.nextMenu, 100)
            this.start = !this.start 
        },
        slotStop: function(){
            clearInterval(this.timer)
            this.start = !this.start 
        },
        getJson() {
            c
        }
    }
}
</script>
