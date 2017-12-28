Vue.component("seach",{
    props:["title","stute"],
    template:`<div class="seach-input">
                <input type="text" v-model="title" @focus="sq(stute)">
            </div>`,
    methods:{
        sq(v){
            v=true;
            this.$emit("puts",v)
        },
        // sb(v){
        //     v=false;
        //     this.$emit("puts",v)
        // }
    }
})
Vue.component("seachove",{
    props:["datas","stute"],
    template:`<ul class="seach-ul" v-show="stute==true">
                <li v-for="item in datas" @click="clic(item.title)">{{item.title}}</li>
            </ul>`,
    methods:{
        clic(v){
            this.$emit("puts",v)
        }
    }
})