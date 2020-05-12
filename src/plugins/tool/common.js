import constant from '@/plugins/constant/common';

// 工具类
let con = constant;
let c = {
    alert: function (t, title = ['title'])
    {
        t.$alert(con.setstr(title).isnull(), con.tip, {
            confirmButtonText: con.ok,
            type: 'error'
        });
    },
    /**
     * 添加成功message提示
     * @param t this
     * @param tipArr 提示信息
     */
    message: function (t, tipArr = ['add'])
    {
        t.$message({
            showClose: true,
            duration: 2500,
            message: con.setstr(tipArr).addsuccess(),
            type: 'success'
        });
    }
};

export default c;