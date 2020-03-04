<template>
    <div class="grid-content">
        <div class="go-first">
            <el-button round class="go-first-size">回首页</el-button>
        </div>
        <div class="operation">
            <el-button icon="el-icon-plus micon" class="mbutton" circle>
            </el-button>
            <el-button icon="el-icon-search micon" :class="[circle ? 'mbutton' : 'mbutton-s']" :circle="circle" @click="oInput">
            </el-button>
            <el-input ref="oInput" placeholder="请输入搜索内容" class="operation-input" v-model="filterText">
            </el-input>
        </div>
        <div class="custom-tree-container msrolla h1">
            <el-tree
                    icon-class="no"
                    accordion
                    class="filter-tree"
                    node-key="id"
                    :data="data"
                    :props="defaultProps"
                    :filter-node-method="filterNode"
                    ref="tree"
                    @node-click="nodeClick">
                        <span class="custom-tree-node" slot-scope="{ node }">
                            <span>{{ node.label }}</span>
                                <span>
                                    <el-tooltip placement="bottom" effect="light" v-show="node.isCurrent">
                                        <div slot="content">
                                            <el-button size="mini" type="text" icon="el-icon-plus micon">
                                            </el-button>
                                            <el-button size="mini" type="text" icon="el-icon-edit-outline micon">
                                            </el-button>
                                            <el-button size="mini" type="text" icon="el-icon-delete-solid micon">
                                            </el-button>
                                        </div>
                                        <i class="el-icon-setting"></i>
                                    </el-tooltip>
                                </span>
                        </span>
            </el-tree>
        </div>
    </div>
</template>
<style>
    .operation-empty{
        height: 40px;
        width: 100%;
    }
    .operation-footer{
        height: 40px;
        position:fixed;
        bottom:0;
        background: #404040;
        user-select: none;
    }
    .mbutton{
        padding: 9px;
    }
    .mbutton-s{
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        padding: 12px;
    }
    .micon{
        font-weight: bold;
    }
    .operation{
        width: 90%;
        height: 38px;
        padding: 15px 0 15px 10%;
        border-bottom: 1px solid #666;
    }
    .operation-input > .el-input__inner{
        height:39px;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border: 0;
        padding: 0;
        transition-property:all;
        transition-duration:.5s;
        transition-delay: 0.1s;
        width: 0;
    }
    .operation-input{
        width: 0;
        transition-property:all;
        transition-duration:.5s;
        transition-delay: 0.1s;
    }
    .go-first{
        border-bottom: 1px solid #666;
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
        border-color: #666;
        background-color: #666;
    }
    .el-tree{
        background: #404040;
        color: #fff;
    }
    .el-tree-node__content{
        padding: 5px 10px 5px 0;
        border-radius: 2px
    }
    .el-tree-node:focus > .el-tree-node__content {
        background-color: #666;
    }
    .el-tree-node-checked{
        background-color: #666;
        border-left:#ba3e3e 3px solid;
    }
    .el-tree-node__content:hover{
        background-color: #666;
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
    import { getType } from '@/api/book/editor';
    var data = {};

    export default {
        watch: {
            filterText(val)
            {
                this.$refs.tree.filter(val);
            }
        },
        methods: {
            // 处理数据位置
            setListType(id, res)
            {
                this.data.forEach(function(v, k)
                {
                    if (v.id == id)
                    {
                        v.children = res;
                    }
                });
            },
            // 列表左侧数据
            listType(id = '')
            {
                getType(id).then(res => {
                    if (id)
                        this.setListType(id, res.data.data);
                    else
                        this.data = res.data.data;
                });
            },
            nodeClick(data, node, value)
            {
                console.log(node);
                this.listType(data.id);

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
            oInput()
            {
                let input = this.$refs.oInput.$el.children[0];
                let ithis = this;
                let transitionFlag = true;
                if (this.circle)
                {
                    this.circle = false;
                    this.$refs.oInput.$el.style.width = "55%";
                    input.style.width = "100%";
                    input.style.paddingLeft = "5%";

                }else
                {
                    this.$refs.tree.filter('');
                    input.style.width = "0";
                    input.style.paddingLeft = "0";
                    this.$refs.oInput.$el.style.width = "0";
                    input.addEventListener("transitionend", function (e)
                    {
                        if(e.target === this && transitionFlag)
                        {
                            transitionFlag = false;

                            if (input.width == 0)
                            {
                                ithis.circle = true;
                            }
                        }
                    }, true);
                }
            },
            filterNode(value, data)
            {
                if (! value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        mounted(){
            this.listType();
        },
        data()
        {
            return {
                circle:true,
                filterText: '',
                data: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }
    };
</script>
