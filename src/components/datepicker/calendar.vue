<template>
<div class="m-calendar">
    <div class="m-calendar-bar">
        <a class="arrow-icon"><<</a>
        <a class="arrow-icon"><</a>
        <div class="m-calendar-ym">
            <a>{{ year }}</a> 
            <a>年</a> 
            <a>{{ month }}</a>
            <a>月</a>
        </div>
        <a class="arrow-icon">>></a>
        <a class="arrow-icon">></a>
    </div>
</div>
</template>
<script>
export default {
    name: "m-calendar",
    props: {
        value: String,
        label: String,
    },
    data() {
        return {
            year: "",
            month: "",
        }
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-calendar{
    width:200px;
    height: 300px;
    .m-calendar-bar{
        width:100%;
        height: 30px;
        .arrow-icon{
            line-height: 30px;
            vertical-align: middle;
        }
        .m-calendar-ym{
            display: inline-block;
            font-size: 0;
            width :60%;
            height: 100%;
            vertical-align: middle;
        }
    }
}
</style>
