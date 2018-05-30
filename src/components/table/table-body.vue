<template>
<tbody>
    <tr v-for = "item in data" :key="item.id">
        <td v-for="col in columns" :key="col.id">
            <template v-if="item[col.prop]">{{item[col.prop]}}</template>
            <m-table-content v-else :id="item.id" :item="item" :content="col.content"></m-table-content>
        </td>
    </tr>
</tbody>
</template>
<script>
import TableContent from "./table-content.vue";

export default {
  name: "m-table-body",
  props: ["data", "columns"],
  data() {
    return {};
  },
  components: {
    "m-table-content": TableContent
  }
};
</script>
<style lang="scss">
@import "../../scss/common/color.scss";
@import "../../scss/common/font.scss";
td {
  box-sizing: border-box;
  text-align: center;
  border-bottom: 1px solid $secondary-color;
  padding: 5px;
  color: $text;
  font-size: $fontsize-button;
}
</style>



