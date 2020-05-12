let constant = {
    title: '标题',
    ok: '确定',
    tip: '提示',
    success: '成功',
    notNull: '不能为空',
    add: '添加',

    // 应用方法
    tempstr: '',
    /**
     * 拼接提示前缀
     * @param tipArr 数组KEY，对应上面对象
     * @returns {constant}
     */
    setstr: function (tipArr)
    {
        let len = tipArr.length;
        this.tempstr = '';
        for (let i = 0; i < len; i++)
        {
            this.tempstr += this[tipArr[i]];
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