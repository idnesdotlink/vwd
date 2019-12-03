<template>
  <table
    class="table tablesorter"
    :class="tableClass"
  >
    <thead :class="theadClasses">
      <tr>
        <slot name="columns">
          <th
            v-for="column in columns"
            :key="column"
          >
            {{ column }}
          </th>
        </slot>
      </tr>
    </thead>
    <tbody :class="tbodyClasses">
      <tr
        v-for="(item, index) in computedData"
        :key="index"
      >
        <td
          v-for="(value, index2) in item"
          :key="index2"
        >
          {{ value }}
        </td>
      </tr>
      <!-- <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <td
            v-for="(column, index) in columns"
            :key="index"
            v-if="hasValue(item, column)"
          >
            {{ itemValue(item, column) }}
          </td>
        </slot>
      </tr> -->
    </tbody>
  </table>
</template>
<script>
import _ from "lodash";
export default {
  name: "BaseTable",
  props: {
    tableClass: {
      type: String,
      default: ""
    },
    theadClasses: {
      type: String,
      default: ""
    },
    tbodyClasses: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    computedData: function() {
      const columns = _.map(this.columns, column => column.toLowerCase());
      const items = _.map(this.data, item => item);
      console.log({data: this.data});
      console.log({columns: this.columns, v: this.$parent});
      // const items =  _.map(this.data, data => {

      // });
      return [];
    }
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    }
  }
};
</script>
