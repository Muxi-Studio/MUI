<template>
<div class="m-calendar">
    <div class="m-calendar-bar">
        <a class="arrow-icon"><<</a>
        <a class="arrow-icon"><</a>
        <div class="m-calendar-ym">
            <a class="m-calendar-tag m-calendar-tag-year">{{ year }}</a> 
            <a class="m-calendar-tag">年</a> 
            <a class="m-calendar-tag  m-calendar-tag-month">{{ month + 1 }}</a>
            <a class="m-calendar-tag">月</a>
        </div>
        <a class="arrow-icon">>></a>
        <a class="arrow-icon">></a>
    </div>
    <m-daypicker :year="year" :month="month"></m-daypicker>
<!--     <m-yearpicker :year="year"></m-yearpicker> -->
</div>
</template>
<script>
import DayPicker from "./picker/daypicker.vue"

export default {
    name: "m-calendar",
    props: {
        value: String,
        label: String,
    },
    data() {
        return {
            currDate: "",
            year: "",
            month: "",
        }
    },
    components: {
        "m-daypicker": DayPicker,
    },
    created() {
        this.currDate = new Date()
        console.log(this.currDate)
        this.year = this.currDate.getFullYear()
        this.month = this.currDate.getMonth()
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
$calendar-width:210px;
$arrow-icon-width:16px;
.m-calendar{
    width:$calendar-width;
    height: 210px;
    padding: 9px;
    box-sizing:content-box;
    border: 1px solid $secondary-color;
    border-radius: 4px;
    .m-calendar-bar{
        width:100%;
        font-size: 0;
        .arrow-icon{
            display: inline-block;
            width:$arrow-icon-width;
            line-height: 30px;
            font-size: 12px;
            vertical-align: middle;
            text-align: center;
        }
        .m-calendar-ym{
            display: inline-block;
            width :$calendar-width - $arrow-icon-width * 4;
            padding: 0 10px;
            box-sizing:border-box;
            vertical-align: middle;
            .m-calendar-tag{
                display: inline-block;
                font-size: 14px;
                line-height: 30px;
                width:24px;
                text-align: center;
                font-weight: bold;
            }
            .m-calendar-tag-year{
                text-align: right;
                width:30px;
                color:$primary-darker;
            }
            .m-calendar-tag-month{
                text-align: right;
                color:$primary-darker;
            }
        }
    }
}
</style>
