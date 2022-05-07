const competitions = {
    namespaced: true,
    state: {
            list:[

                {   id:1,
                    homeowner:"Beşiktaş", 
                    away:"Fenerbahçe",
                    homewin:1.50,
                    draw:2.00,
                    awaywin:2.50,
                    hour:"19:30"
                },
                {   id:2,
                    homeowner:"Fenerbahçe", 
                    away:"Galatasaray",
                    homewin:3.50,
                    draw:4.00,
                    awaywin:3.00,
                    hour:"20.30"
                },
                {
                    id:3,
                    homeowner:"Trabzon", 
                    away:"Fenerbahçe",
                    homewin:4.50,
                    draw:7.00,
                    awaywin:5.00,
                    hour:"21.30"
                }  
            ]
    },
    getters: {
        _getList(state) {
            return state.list;
        }
    }
}
export default competitions;