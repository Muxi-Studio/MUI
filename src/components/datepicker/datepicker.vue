<template>
<div>
    <m-input v-model="text" v-on:onfocus="onFocus"></m-input>
    <m-calendar v-if="calendar" v-on:getcurr="getcurr" :pyear="year" :pmonth="month" :pday="day"></m-calendar>
</div>
</template>
<script>
import Mdatepicker from "../forms/input"
import Mcalendar from "./calendar.vue"

export default {
    name: "m-datepicker",
    props: {
        value: String,
        label: String,
    },
    components: {
        Mdatepicker,
        "m-calendar": Mcalendar,
    },
    data() {
        return {
            text: "",
            calendar: false,
            year: "",
            month: "",
            day: "",
        }
    },
    methods: {
        onFocus() {
            this.calendar = true
        },
        getcurr(e) {
            this.text = e
        },
    },
    created() {
        const currDate = new Date()
        this.year = currDate.getFullYear()
        this.month = currDate.getMonth()
        this.day = currDate.getDate()
        this.text = `${this.year}-${this.month + 1}-${this.day}`
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
</style>
