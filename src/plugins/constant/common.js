let constant = {
    'title': '标题',
    'ok': '确定',
    'tip': '提示',
    isnull: function (key)
    {
        return this[key] + '不能为空'
    }
};

export default constant;