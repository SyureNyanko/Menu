(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{147:function(n){n.exports=JSON.parse('[{"menu":"野菜炒め","id":1},{"menu":"コロッケ","id":2},{"menu":"焼き肉","id":3},{"menu":"ピーマン肉詰め","id":4},{"menu":"豚キムチ","id":5},{"menu":"ガパオライス","id":6},{"menu":"焼きそば","id":7},{"menu":"ゴーヤチャンプル","id":8},{"menu":"焼き鮭、ホッケ、アジ、タラ、サワラ、タイ、シシャモ","id":9},{"menu":"豚汁","id":10},{"menu":"鍋（豆乳、キムチ、アゴ出汁、豚骨）","id":11},{"menu":"親子丼","id":12},{"menu":"そぼろ丼","id":13},{"menu":"おでん","id":14},{"menu":"豚の角煮","id":15},{"menu":"お好み焼き","id":16},{"menu":"たこ焼き","id":17},{"menu":"生姜焼き","id":18},{"menu":"大学芋","id":19},{"menu":"（味噌煮込み）うどん","id":20},{"menu":"すき焼き","id":21},{"menu":"キンピラゴボウ","id":22},{"menu":"かぼちゃ煮込み","id":23},{"menu":"炊き込みご飯","id":24},{"menu":"明太子スパゲティ","id":25},{"menu":"カルボナーラ","id":26},{"menu":"グラタン","id":27},{"menu":"オムライス","id":28},{"menu":"ポテトのチーズ焼","id":29},{"menu":"ハンバーグ","id":30},{"menu":"ポテトサラダ","id":31},{"menu":"ロールキャベツ","id":32},{"menu":"クリームシチュー","id":33},{"menu":"麻婆茄子","id":34},{"menu":"麻婆豆腐","id":35},{"menu":"青椒肉絲","id":36},{"menu":"餃子","id":37},{"menu":"焼売","id":38},{"menu":"回鍋肉","id":39},{"menu":"炒飯","id":40},{"menu":"よだれ鶏","id":41},{"menu":"春雨スープ（肉団子とほうれん草の中華スープ）","id":42},{"menu":"ワンタンスープ","id":43}]')},148:function(n,t,e){"use strict";e.r(t);var m=e(147),d={data:function(){return{show:!1,items:m,menu:"",count:0,start:!1}},created:function(){},methods:{nextMenu:function(){this.count=this.count+1,this.menu=this.items[this.count%this.items.length].menu},slotStart:function(){this.timer=setInterval(this.nextMenu,100),this.start=!this.start},slotStop:function(){clearInterval(this.timer),this.start=!this.start},getJson:function(){c}}},o=e(21),r={components:{SlotAnimation:Object(o.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"SlotAnimation"},[n.start?e("span",[e("button",{on:{click:function(t){return n.slotStop()}}},[n._v("STOP")])]):e("span",[e("button",{on:{click:function(t){return n.slotStart()}}},[n._v("START")])]),n._v(" "),e("div",[n._v("\n        "+n._s(n.menu)+"\n    ")])])}),[],!1,null,null,null).exports},data:function(){return{start:!1}}},l=Object(o.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("SlotAnimation")}),[],!1,null,null,null);t.default=l.exports}}]);