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
    notify: function (t, title = ['add'])
    {
        t.$notify({
            title: con.success,
            message: con.setstr(title).addsuccess(),
            position: 'bottom-right',
            type: 'success'
        });
    }
};

export default c;