<template>
<div>
    <m-input v-model="model" v-on:onfocus="onFocus"></m-input>
    <m-calendar v-if="calendar" v-on:getcurr="getcurr" :pyear="year" :pmonth="month" :pday="day" ></m-calendar>
</div>
</template>
<script>
import Mdatepicker from "../forms/input"
import Mcalendar from "./calendar.vue"

export default {
    name: "m-datepicker",
    props: {
        value: String,
    },
    components: {
        Mdatepicker,
        "m-calendar": Mcalendar,
    },
    data() {
        return {
            calendar: false,
            year: "",
            month: "",
            day: "",
            currDate: "",
        }
    },
    methods: {
        onFocus() {
            this.calendar = true
        },
        getcurr(e) {
            this.model = e
        },
        getdate() {
            this.year = this.currDate.getFullYear()
            this.month = this.currDate.getMonth()
            this.day = this.currDate.getDate()
            this.model = `${this.year}-${this.month + 1}-${this.day}`
        },
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit("input", val)
            },
        },
    },
    mounted() {
        if (this.value) {
            this.currDate = new Date(Date.parse(this.value))
        } else {
            this.currDate = new Date()
        }
        this.getdate()
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
</style>
