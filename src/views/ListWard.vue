<template>
  <!-- <div class="bg-green-400 rounded p-4 mb-4 flex gap-4">
    <el-input
      v-model="input"
      class="w-1/4"
      placeholder="Tìm theo tên"
      clearable
    />
    <el-select v-model="value" clearable placeholder="Loại địa điểm">
      <el-option
        v-for="item in typePlaces"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button type="primary">Tìm kiếm</el-button>
  </div> -->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="Số thứ tự" width="120" />
    <el-table-column prop="name" label="Tên phường xã" width="180" />
    <el-table-column prop="description" label="Mô tả phường xã" />
    <el-table-column prop="createdAt" label="Ngày tạo" />
    <el-table-column prop="updatedAt" label="Ngày cập nhật" />
    <el-table-column prop="name" label="Thao tác">
      <template #default="scope">
        <div class="flex gap-4">
          <router-link :to="'/update-ward/' + scope.row.id">
            <el-button type="primary" :icon="Edit" circle />
          </router-link>
         <span @click="fetchDeleteById(scope.row.id)">
           <el-button type="danger" :icon="Delete" circle />
         </span>
         </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { Delete, Edit } from "@element-plus/icons-vue";
import { deleteWardById, getListWard } from "../apis/ward";
import _ from "lodash";
import { ElNotification } from "element-plus";

export default {
  created() {
    this.Delete = Delete;
    this.Edit = Edit;
    this.fetchGetListWards();
  },

  data() {
    return {
      tableData: [],
      optionWard: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    };
  },
  methods: {
    fetchGetListWards() {
      getListWard()
        .then((result) => {
          const keys = ["id", "name", "description", "createdAt", "updatedAt"];
          this.tableData = _.map(result.data, (item) =>
            _.zipObject(keys, item)
          );
          console.log(this.tableData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchDeleteById(id) {
      deleteWardById(id)
        .then(() => {
          this.fetchGetListWards();
          ElNotification({
            title: "Success",
            message: "This is a success message",
            type: "success",
          });
        })
        .catch(() => {
          ElNotification({
            title: "Error",
            message: "This is an error message",
            type: "error",
          });
        });
    },
  },
};
</script>
