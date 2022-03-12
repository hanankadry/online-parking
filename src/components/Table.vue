<template>
  <div class="container">
    <div class="row">
      <div class="input-icons" v-if="searchOption == true">
        <i class="bi bi-search icon" />
        <input
          type="text"
          class="m-1 mb-5 input-md"
          placeholder="Search"
          v-model="searchInput"
        />
      </div>
      <vue-good-table
        :columns="tableColumns"
        :rows="tableRows"
        styleClass="vgt-table"
        class="table-style"
        :pagination-options="{
          enabled: pagination,
          mode: 'remote',
        }"
        ><template v-slot="props">
          <span v-if="props.column.field == 'button'">
            <a href="">
              <i class="bi bi-cross icon"></i>
              {{ props.row.button }}</a
            >
            <a href="">
              <i class="bi bi-info icon"></i>
              {{ props.row.button }}</a
            >
            <a href="">
              <i class="bi bi-pencil-square icon"></i>
              {{ props.row.button }}</a
            >
          </span>
        </template>
        <template #table-row="props">
          <span v-if="props.column.field == 'status'">
            <span class="status-success" v-if="(props.row.status == 'checked in' | props.row.status == 'available')">{{
              props.row.status
            }}</span>
            <span class="status-danger" v-else-if="(props.row.status == 'missed' | props.row.status == 'out of order')">{{
              props.row.status
            }}</span
            ><span class="status-warning" v-else>{{ props.row.status }}</span>
          </span>
        </template>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table-next";
export default {
  components: {
    VueGoodTable,
  },
  props: ["columns", "rows", "search", "pagination"],
  data() {
    return {
      searchInput: "",
      searchOption: this.search,
      tableColumns: this.columns,
      tableRows: this.rows,
      tablePagination: this.pagination,
    };
  },
};
</script>

<style scoped>
.icon {
  padding-left: 20px;
  padding-top: 10px;
  font-size: 14pt;
}
.status-success {
  background-color: #02b902;
  color: white;
  border-radius: 95px;
  padding: 5px;
}
.status-danger {
  background-color: #fd1d1d;
  color: white;
  border-radius: 95px;
  padding: 5px;
}
.status-warning {
  background-color: #faaa17;
  color: white;
  border-radius: 95px;
  padding: 5px;
}
.table-style {
  box-shadow: 5px 10px #374258;
  padding: 0;
  border: 3px solid #f74464;
  margin: 0;
}
</style>