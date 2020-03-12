(function (ROOT)
{
    // 构造函数
    var jQuery = function (selector)
    {
        return new jQuery.fn.init(selector);
    };

    // 生成原型对象并覆盖prototype对象
    jQuery.fn = jQuery.prototype = {
        construtor: jQuery,
        version: '1.0.0',
        init: function (selector)
        {
            this[0]= document.querySelector(selector);

            return this;
        },

        // 在原型上添加方法
        toArray: function (){},
        get: function (){},
        each: function (){},
        ready: function (){},
        first: function (){},
        slice: function (){}
        // ... ...
    };

    // 生成原型对象并覆盖prototype对象
    jQuery.fn.init.prototype = jQuery.fn;
    // 生成工具和原型两个方法
    jQuery.extend = jQuery.fn.extend = function (options)
    {
        var target = this;

        for (name in options)
        {
            target[name] = options[name];
        }

        return target;
    };

    // 调用extend方法,添加到构造函数 $.xx = jQuery.xx
    jQuery.extend({
        isFunction: function (){},
        type: function (){},
        parseHTML: function (){},
        parseJSON: function (){},
        ajax: function (){
            return 1;
        }
    });

    // 调用fn.extend方法，添加到原型上 $(init).xx = jQuery(init).xx
    jQuery.fn.extend({
        queue: function () {},
        promise: function () {},
        attr: function () {},
        prop: function () {},
        addClass: function () {},
        removeClass: function () {},
        val: function (v) {
            v = this[0].defaultValue;
            return v;
        },
        css: function () {
        },
        html: function (el) {
            el = this[0].innerText;
            return el;
        }
    });
    // ...

    // $符号的由来，实际上它就是jQuery，一个简化的写法，在这里我们还可以替换成其他可用字符
    ROOT.$ = jQuery;

    // 简化打印
    ROOT.$$ = function (...d)
    {
        return console.log(...d);
    };

})(window);