<template>
  <base-table
    :data="table.data"
    :columns="table.columns"
    table-class="text-left"
    thead-classes="text-primary text-left"
  />
</template>
<script>
import BaseTable from "@/components/BaseTable";

export default {
  components: {
    BaseTable
  },
  computed: {
    table() {
      console.log({USERTABLEVUE: this.$t("dashboard.usersTable")});
      return this.$t("dashboard.usersTable");
    }
  }
};
</script>

