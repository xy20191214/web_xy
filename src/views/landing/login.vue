<template>
        <el-container >
            <el-main >
                <el-row style="margin-bottom:40px;margin-top:40px">
                    <el-tag type="danger" style="width:100px">登录</el-tag>
                    <el-link href="https://element.eleme.io" target="_blank">登录</el-link>
                    *
                    <el-tag type="success" style="width:100px">注册</el-tag>
                    <el-link href="https://element.eleme.io" target="_blank">注册</el-link>
                </el-row>
                <el-form ref="form" :label-position="left" :model="form">
                    <el-form-item>
                        <el-input  class='input-user' placeholder="手机号或邮箱" v-model="form.Account_number" clearable></el-input>
                        <br>
                        <el-input  class='input-user' placeholder="密码" v-model="form.Password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="checked">记住我</el-checkbox>

                        <el-popover
                                placement="right"
                                width="400"
                                trigger="click"
                                style="margin-left:100px">
                            <p style="cursor:pointer;">使用手机号重置密码</p>
                            <p style="cursor:pointer;">使用邮箱重置密码</p>
                            <el-link slot="reference">登录遇到问题</el-link>
                        </el-popover>


                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" size="medium" round style="width:250px">登录</el-button>
                    </el-form-item>
                </el-form>
                <i style="color:#DCDFE6;">-------社交帐号登录------</i>
                <br><br>
                <i class="el-icon-basketball" style="width:50px;cursor:pointer;"></i>
                <i class="el-icon-platform-eleme" style="width:50px;cursor:pointer;"></i>
                <i class="el-icon-phone-outline" style="width:50px;cursor:pointer;"></i>
            </el-main>
        </el-container>
</template>
<style >
    body{width: 100%;height: 100%;position: relative;background-color: #f1f1f1}
    .el-main {
        background-color: #fff;
        color: #333;
        text-align: center;
        height: 500px;
        margin : 100px 550px 100px 550px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .el-tag{
        cursor:pointer;
    }
    .input-user{
        width:300px;
        height:40px;
    }
</style>
<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>