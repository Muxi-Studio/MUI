<template>
<div class="m-calendar">
    <div class="m-calendar-bar">
        <a class="arrow-icon" @click="yearsub">{{'&lt;'}}</a>
        <a class="arrow-icon" @click="monthsub">
            <a v-show="monthshow">{{'&lt;&lt;'}}</a>
        </a>
        <div class="m-calendar-ym">
            <a class="m-calendar-tag m-calendar-tag-content m-calendar-tag-year" @click="yearbtn">{{ year }}</a> 
            <a class="m-calendar-tag">年</a> 
            <a class="m-calendar-tag  m-calendar-tag-content" @click="monthbtn">{{ month + 1}}</a>
            <a class="m-calendar-tag">月</a>
        </div>
        <a class="arrow-icon" @click="monthadd" v-if="monthbtn">
            <a v-show="monthshow">{{'&gt;'}}</a>
        </a>
        <a class="arrow-icon" @click="yearadd">{{'&gt;&gt;'}}</a>
    </div>
    <m-daypicker :pyear="year" :pmonth="month" v-if="selectday" v-on:daychange="daychange"></m-daypicker>
    <m-yearpicker :pyear="year" v-if="selectyear" v-on:yearchange="yearchange"></m-yearpicker>
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
    computed: {
        monthshow() {
            return this.selectday
        },
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
        yearsub() {
            if (!this.selectyear) {
                this.year -= 1
                bus.$emit("yearbtn", this.year)
            } else {
                this.year -= 10
                bus.$emit("yearpage", this.year)
            }
        },
        yearadd() {
            if (!this.selectyear) {
                this.year += 1
                bus.$emit("yearbtn", this.year)
            } else {
                this.year += 10
                bus.$emit("yearpage", this.year)
            }
        },
        monthsub() {
            this.month -= 1
            if (this.month === -1) {
                this.month = 11
                this.year -= 1
            }
            bus.$emit("monthbtn", this.month)
        },
        monthadd() {
            this.month += 1
            if (this.month === 12) {
                this.month = 0
                this.year += 1
            }
            bus.$emit("monthbtn", this.month)
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
    position: relative;
    background: white;
    border-radius: 4px;
    z-index: 4000;
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
            cursor: pointer;
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
            .m-calendar-tag-content{
                text-align: right;
                color:$primary-darker;
                cursor: pointer;
            }
            .m-calendar-tag-year{
                width:32px;
            }
        }
    }
}
</style>
