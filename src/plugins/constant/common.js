let constant = {
    'title': '标题',
    'ok': '确定',
    'tip': '提示',
    'success': '成功',
    'notNull': '不能为空',
    'add': '添加',



    // 应用方法
    'tempstr': '',
    setstr: function (strs)
    {
        let len = strs.length;
        this.tempstr = '';
        for (let i = 0; i < len; i++)
        {
            this.tempstr += this[strs[i]];
        }

        return this;
    },
    isnull: function ()
    {
        return this.tempstr + this.notNull
    },
    addsuccess: function ()
    {
        return this.tempstr + this.success;
    }
};

export default constant;