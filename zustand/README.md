# create your own zustand 

* create 传入 createState 方法，参数为 set get api 三个参数，返回 useXXXStore(selector)
* createStore 接收 createState 返回 api
    * api 包含 setState getState  subscribe destroy 三个方法
* useBoundStore = (selector) => useStore(select, api)
* useBoundStore  bind api
* return useBoundStore
