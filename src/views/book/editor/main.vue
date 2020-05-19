<template>
    <el-row :gutter="0" v-wechat-title="$route.meta.title" class="hw1" style="min-width: 1110px;">
        <el-col :span="5" class="hw1" style="min-width: 310px">
            <left></left>
        </el-col>
        <el-col :span="6" class="hw1 mroll" style="min-width: 210px">
            <middle></middle>
        </el-col>
        <el-col :span="13" class="hw1 mrolla">
            <right></right>
        </el-col>
    </el-row>
</template>
<script>
    import left from './left';
    import middle from './middle';
    import right from './right';

    export default {
        components: {
            left,
            middle,
            right
        }
    };
</script>
