new Vue({
    el:"#add",
    data:{
        datas:[
            {
                title:"aaaa",
                id:"1"
            },
            {
                title:"bbbb",
                id:"2"
            },
            {
                title:"cccc",
                id:"3"
            }
        ],
        title:'',
        stute:false
    },
    methods:{
        aa(v){
            console.log(v)
            this.title=v;
        },
        bb(v){
            this.stute=v;
        }
    }
})