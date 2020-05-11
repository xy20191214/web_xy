<template>
    <div class="hw1 i-editor">
        <div class="go-first">
            <el-button round class="go-first-size">回首页</el-button>
        </div>
        <div class="operation">
            <el-button icon="el-icon-plus micon" :class="[addCircle ? 'mbutton' : 'mbutton-s']" :circle="addCircle" @click="addInput">
            </el-button>
            <el-input ref="addInput" placeholder="输入添加分类标题" class="operation-input" v-model="title"
                      clearable maxlength="12">
            </el-input>
            <el-button :loading="titleLoading" icon="el-icon-check micon" :class="[addOk ? 'mbutton-r' : 'mbutton-r-b']" @click="addType">
            </el-button>

            <i style="margin-left: 5px"></i>
            
            <el-button icon="el-icon-search micon" :class="[circle ? 'mbutton' : 'mbutton-s']" :circle="circle" @click="oInput">
            </el-button>
            <el-input ref="oInput" placeholder="输入搜索内容" class="operation-input-search" v-model="filterText">
            </el-input>
            <el-button icon="el-icon-check micon" :class="[ok ? 'mbutton-r' : 'mbutton-r-b']">
            </el-button>
        </div>
        <div class="custom-tree-container msrolla" @scroll="scroll">
            <el-tree
                    v-loading="loading"
                    element-loading-background="rgb(64, 64, 64)"
                    icon-class="no"
                    accordion
                    class="filter-tree"
                    node-key="id"
                    :data="data"
                    :props="defaultProps"
                    :filter-node-method="filterNode"
                    ref="tree"
                    :load="loadNode"
                    :empty-text="text"
                    lazy
                    @node-click="nodeClick">
                        <span class="custom-tree-node" slot-scope="{ node }">
                            <span>{{ node.label }}</span>
                                <span>
                                    <el-tooltip placement="bottom" effect="light" v-show="node.isCurrent">
                                        <div slot="content">
                                            <el-tooltip class="item" content="位置上升" placement="bottom" effect="light">
                                                <el-button size="mini" type="text" icon="el-icon-arrow-up micon" @click="typeUp">
                                                </el-button>
                                            </el-tooltip>
                                            <el-tooltip class="item" content="位置下降" placement="bottom" effect="light">
                                                <el-button size="mini" type="text" icon="el-icon-arrow-down micon" @click="typeDown">
                                                </el-button>
                                            </el-tooltip>
                                            <el-tooltip class="item" content="添加" placement="bottom" effect="light" @click="showTypeAdd">
                                                <el-button size="mini" type="text" icon="el-icon-plus micon" @click="typeAdd">
                                                </el-button>
                                            </el-tooltip>
                                            <el-tooltip class="item" content="编辑" placement="bottom" effect="light">
                                                <el-button size="mini" type="text" icon="el-icon-edit-outline micon" @click="typeUpdate">
                                                </el-button>
                                            </el-tooltip>
                                            <el-tooltip class="item" content="删除" placement="bottom" effect="light">
                                                <el-button size="mini" type="text" icon="el-icon-delete-solid micon" @click="typeDelete">
                                                </el-button>
                                            </el-tooltip>
                                            <el-input placeholder="请输入内容" class="typeAdd">
                                                <el-button slot="prepend" class="cblack" style="cursor: default">添加</el-button>|
                                                <el-button slot="append" icon="el-icon-check" class="type-add-open cblack"></el-button>|
                                                <el-button slot="append" icon="el-icon-close" class="type-add-close cblack"></el-button>
                                            </el-input>
                                        </div>
                                        <i class="el-icon-setting"></i>
                                    </el-tooltip>
                                </span>
                        </span>
            </el-tree>
        </div>
    </div>
</template>
<style lang="less">
    @import '../../../assets/color';

    /*分类列表元素设置*/
    .i-editor{
        background: @backa;
    }
    .cblack{
        color: @cb !important;
    }
    .typeAdd{
        margin: 20px 0px;
    }
    .type-add-open{
        border: 1px solid @bora !important;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
    }
    .type-add-close{
        margin-left: 18px !important;
    }

    /*分类主操作*/
    .operation-empty{
        height: 40px;
        width: 100%;
    }
    .operation-footer{
        height: 40px;
        position:fixed;
        bottom:0;
        background: @backa;
        user-select: none;
    }
    .mbutton{
        padding: 9px;
        transition-property: all;
        transition-duration: 400ms;
        transition-delay: 515ms;
    }
    .mbutton-s{
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        padding: 12px;
        transition-property: all;
        transition-duration: 400ms;
    }
    .mbutton-r{
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        width: 0;
        border: 0;
        padding: 0;
        height: 40px;
        transition-property: all;
        transition-duration: 100ms;
     }
    .mbutton-r-b{
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        width: 40px;
        height: 40px;
        padding: 12px;
        transition-property: all;
        transition-duration: 400ms;
        transition-delay: 540ms;
    }
    .micon{
        font-weight: bold;
        color: @backa;
    }
    .operation{
        width: 94%;
        padding: 15px 0 15px 5%;
        border-bottom: 1px solid @borb;
    }
    .operation-input > .el-input__inner{
        height: 40px;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border: 0;
        padding: 0;
        transition-property:all;
        transition-duration:.5s;
        transition-delay: 0.1s;
        width: 0;
    }
    .operation-input-search > .el-input__inner{
        height: 40px;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border: 0;
        padding: 0;
        padding-left: 5%;
        transition-property:all;
        transition-duration:.5s;
        transition-delay: 0.1s;
        width: 100%;
    }
    @-moz-document url-prefix(){ // 火狐专用
        .operation-input > .el-input__inner, .operation-input-search > .el-input__inner{
            height: 39.5px;
        }
    }
    .operation-input{
        width: 0;
        padding-left: 0;
        transition-property:all;
        transition-duration:.5s;
        transition-delay: 0.1s;
    }
    .operation-input-search{
        width: 55%;
        transition-property:all;
        transition-duration:.5s;
        transition-delay: 0.1s;
    }

    /*返回首页*/
    .go-first{
        border-bottom: 1px solid @borb;
        padding: 30px 10%;
    }
    .go-first-size
    {
        color: black;
        height: 46px;
        width: 100%;
    }
    .go-first-size:hover{
        color: white;
        border-color: @borb;
        background-color: @borb;
    }
    .el-tree{
        background: @backa;
        color: @ca;
    }
    .el-tree-node__content{
        padding: 5px 10px 5px 0;
        border-radius: 2px
    }
    .el-tree-node:focus > .el-tree-node__content {
        background-color: @borb;
    }
    .el-tree-node-checked{
        background-color: @borb;
        border-left:@borc 3px solid;
    }
    .el-tree-node__content:hover{
        background-color: @borb;
    }
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
    }
</style>
<script>
    import editor from '@/api/book/editor';
    import c from '@/plugins/tool/common';

    export default {
        watch: {
            filterText(val)
            {
                this.$refs.tree.filter(val);
            }
        },
        methods: {
            showTypeAdd() // 展示添加框
            {

            },
            typeUp() // 分类升
            {
                
            },
            typeDown() // 分类降
            {

            },
            typeAdd() // 分类添加
            {

            },
            typeUpdate() // 分类修改
            {

            },
            typeDelete() // 分类删除
            {

            },
            // 添加分类
            addType()
            {
                if (! this.title)
                {
                    c.alert(this);

                    return false;
                }

                this.titleLoading = true;
                editor.addType(this.title).then(res =>
                {
                    this.titleLoading = false;
                    if (! res.ch)
                    {
                        c.alert(this);
                    }else
                    {
                        c.notify(this);
                        this.listType();
                    }
                });
            },
            // 设置div高度
            setHeight()
            {
                let height = $('.hw1').ht() - $(".go-first").oht() - $(".operation").oht();
                $('.custom-tree-container').ht(height);
                this.limit = Math.ceil(height / 36) + 1; // 自定义分页数

                this.listType();
            },
            // 滚动条
            scroll(e)
            {
                let bottom = $(e).sht() - Math.floor($(e).st()) - $(e).ht();

                // 分页
                if (bottom < 5 && this.bool)
                {
                    this.bool = false;
                    let page = this.temp.current_page + 1;
                    if (this.temp.last_page > this.temp.current_page)
                        this.listType(0, page);
                }
            },
            // 加载节点
            loadNode(node, resolve)
            {
                if (node.level === 3 || node.level === 0) return resolve([]);
                this.listType(node.data.id).then(res =>
                {
                    return resolve(res);
                });
            },
            // 列表左侧数据
            async listType(pch = 0, page = 1, limit = '')
            {
                limit = limit ? limit : this.limit;
                let old = this.data,
                    res = await editor.getType(pch, page, limit);
                this.loading = false;
                let data = res.data.data;

                // 获取左侧宽度，省略字符串
                let del = Math.floor(($(".hw1").wd() - 50) / 20);
                for (let i in data)
                {
                    if (data[i].title.length > del)
                    {
                        data[i].title = data[i].title.substr(0 ,del) + '...'
                    }
                }

                // 验证
                if (data.length == 0) this.text = '没有分类';

                // 子集
                if (pch) return data;

                this.bool = true;
                this.temp = res.data;

                // 分页
                if (page > 1 && data) this.data = old.concat(data);
                else this.data = data;
            },
            nodeClick(data, node, value)
            {
                // 还原样式
                if (value.$el.parentNode.getAttribute('role') == 'tree')
                {
                    value.$el.parentElement.children.forEach(function(item){
                        item.style.background = "#404040";
                    });
                }

                // 移除选中样式
                document.getElementsByClassName("el-tree-node__content").forEach(function(item){
                    item.classList.remove("el-tree-node-checked");
                });

                // 赋值样式
                value.$el.firstChild.classList.add("el-tree-node-checked");
                value.$el.style.background = 'rgb(51, 51, 51)';
            },
            // 封装动画
            anmi(t, input)
            {
                t.titleLoading = false;
                if (t.addCircle)
                {
                    t.circle = false;
                    t.oInput();
                    t.addCircle = false;
                    t.addOk = false;
                    $(t.$refs.addInput).css('width', '55%');

                    $(input).css('width', '100%')
                        .css('paddingLeft', '5%')
                        .css('border', '1px solid #DCDFE6');

                }else
                {
                    t.addOk = true;
                    t.addCircle = true;
                    $(input).css('border', 0)
                        .css('width', 0)
                        .css('paddingLeft', 0);
                    $(t.$refs.addInput).css('width', 0);
                }
            },
            addInput()
            {
                let input = this.$refs.addInput.$el.children[0];
                this.anmi(this, input);
            },
            oInput()
            {
                this.titleLoading = false;
                let input = this.$refs.oInput.$el.children[0];

                if (this.circle)
                {
                    this.addCircle = false;
                    this.addInput();
                    this.circle = false;
                    this.ok = false;
                    this.$refs.oInput.$el.style.width = "55%";
                    input.style.width = "100%";
                    input.style.paddingLeft = "5%";

                }else
                {
                    this.$refs.tree.filter('');
                    this.ok = true;
                    input.style.width = "0";
                    input.style.paddingLeft = "0";
                    this.$refs.oInput.$el.style.width = "0";
                    this.circle = true;
                }
            },
            filterNode(value, data)
            {
                if (! value) return true;
                return data.title.indexOf(value) !== -1;
            }
        },
        mounted(){
            this.setHeight();
            // 窗口改变
            window.onresize = () => {
                this.setHeight();
            }
        },
        data()
        {
            return {
                title: '',
                text:'',
                temp: '', // 临时数据
                limit: 10, // 每页条数
                bool: true, // 请求控制
                circle: false, // 搜索控制
                addCircle: true, // 添加控制
                addOk: true, // 添加确定控制
                ok: false, // 搜索确定控制
                filterText: '',
                data: [],
                loading: true, // 列表load
                titleLoading: false, // 输入标题load
                defaultProps: {
                    children: 'children',
                    label: 'title'
                }
            };
        }
    };
</script>
