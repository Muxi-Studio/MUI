<template>
<div class="m-calendar">
    <div class="m-calendar-bar">
        <a class="arrow-icon"><<</a>
        <a class="arrow-icon"><</a>
        <div class="m-calendar-ym">
            <a class="m-calendar-tag m-calendar-tag-year" @click="yearbtn">{{ year }}</a> 
            <a class="m-calendar-tag">年</a> 
            <a class="m-calendar-tag  m-calendar-tag-month" @click="monthbtn">{{ month + 1}}</a>
            <a class="m-calendar-tag">月</a>
        </div>
        <a class="arrow-icon">>></a>
        <a class="arrow-icon">></a>
    </div>
    <m-daypicker :year="year" :month="month" v-if="selectday" v-on:daychange="daychange"></m-daypicker>
    <m-yearpicker :year="year" v-if="selectyear" v-on:yearchange="yearchange"></m-yearpicker>
    <m-monthpicker :month="month" v-if="selectmonth" v-on:monthchange="monthchange"></m-monthpicker>
</div>
</template>
<script>
import DayPicker from "./picker/daypicker.vue"
import YearPicker from "./picker/yearpicker.vue"
import MonthPicker from "./picker/monthpicker.vue"

export default {
    name: "m-calendar",
    props: {
        value: String,
        label: String,
        pyear: [String, Number],
        pmonth: [String, Number],
        pday: [String, Number],
    },
    data() {
        return {
            currDate: "",
            day: "",
            year: "",
            month: "",
            selectday: true,
            selectyear: false,
            selectmonth: false,
        }
    },
    components: {
        "m-daypicker": DayPicker,
        "m-yearpicker": YearPicker,
        "m-monthpicker": MonthPicker,
    },
    created() {
        this.year = this.pyear
        this.month = this.pmonth
        this.day = this.pday
        this.currDate = `${this.year}-${this.month}-${this.day}`
    },
    Updated() {
        console.log("hahaha")
        // this.currDate = `${this.year}-${this.month}-${this.day}`
        // this.$emit("getcurr", this.currDate)
    },
    methods: {
        update() {
            this.currDate = `${this.year}-${this.month + 1}-${this.day}`
            this.$emit("getcurr", this.currDate)
        },
        yearbtn() {
            this.selectyear = true
            this.selectmonth = false
            this.selectday = false
        },
        monthbtn() {
            this.selectyear = false
            this.selectmonth = true
            this.selectday = false
        },
        daychange(e) {
            this.day = e
            this.update()
        },
        yearchange(e) {
            this.year = e
            this.selectyear = false
            this.selectmonth = true
            this.update()
        },
        monthchange(e) {
            this.month = e
            this.selectmonth = false
            this.selectday = true
            this.update()
        },
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
$calendar-content-width: 26px * 7;
$calendar-padding:7px;
$arrow-icon-width:16px;
.m-calendar{
    width:$calendar-content-width;
    height: 230px - $calendar-padding * 2;
    padding: $calendar-padding;
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
            width :$calendar-content-width - $arrow-icon-width * 4;
            padding: 0 10px;
            box-sizing:border-box;
            vertical-align: middle;
            .m-calendar-tag{
                display: inline-block;
                font-size: 14px;
                line-height: 30px;
                width:22px;
                text-align: center;
                font-weight: bold;
            }
            .m-calendar-tag-year{
                text-align: right;
                width:32px;
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
