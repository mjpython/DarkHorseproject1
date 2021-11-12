Mock.setup({
    timeout: '2000-4000'
})
var data = Mock.mock("data.php",{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'data|1-20': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name':'@name',
        'date':'@datetime',
        'content':'@sentence',
        'shenhe|1':[1,0],
        'reply|0-1':'@sentence',
        // 'replydate':'@datetime'
    }]
})