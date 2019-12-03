<template>
  <base-table
    :data="tableData"
    thead-classes="text-primary"
  >
    <template v-slot="{ row }">
      <td>
        <base-checkbox v-model="row.done" />
      </td>
      <td class="text-left">
        <p class="title">
          {{ row.title }}
        </p>
        <p class="text-muted">
          {{ row.description }}
        </p>
      </td>
      <td class="td-actions text-right">
        <base-button
          type="link"
          artia-label="edit button"
        >
          <i class="tim-icons icon-pencil" />
        </base-button>
      </td>
    </template>
  </base-table>
</template>
<script>
import BaseButton from "@/components/BaseButton";
import BaseTable from "@/components/BaseTable";
import BaseCheckbox from "@/components/BaseCheckbox";

export default {
  components: {
    BaseButton,
    BaseTable,
    BaseCheckbox
  },

  computed: {
    tableData() {
      console.log({TASKLISTVUE: this.$t("dashboard.taskList")});
      return this.$t("dashboard.taskList");
    }
  }
};
</script>
