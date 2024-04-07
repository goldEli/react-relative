# React  keep alive

* 核心就是 useOutlet 返回 element，即路由对应的页面
* 如果是需要缓存的页面，将 element 存起到elementList
* 将 elementList 中所有的element都渲染出来，display none
* 基于当前路由将对应的element display block

