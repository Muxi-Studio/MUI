<template>
<label class="m-radio">
        <span class="m-radio-input"
          :class="{
            'is-checked': model === label,
            'is-focus': focus
          }"
        >
        <span class="m-radio-inner"></span>
        <input
        :value = "label"
      class="m-radio-origin"
      type="radio"
      @focus="focus = true"
      @blur="focus = false"
      v-model="model">
      </span>
      <span class="m-radio-text">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
</label>
</template>
<script>
export default {
    name: "m-radio",
    props: {
        value: String,
        label: String,
    },
    data() {
        return {
            focus: false,
        }
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
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-radio{
    .m-radio-input{
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        line-height: 1;
        vertical-align: middle;
        .m-radio-origin{
            display: none;
        }
        .m-radio-inner{
            border: 1px solid $secondary-color;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) scale(0);
                transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
            }
            &:hover{
                border: 1px solid $primary-darker;
            }
        }
    }
    .is-checked{
        .m-radio-inner{
           background-color: $primary-darker;
           border: 1px solid $primary-darker;
           &:after{
                transform: translate(-50%,-50%) scale(1);
           }
        }
    }
    .m-radio-text{
        vertical-align: middle;
    }
}
</style>
