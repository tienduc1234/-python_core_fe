<template>
  <div class="bg-green-400 rounded p-4 mb-4 flex gap-4">
    <el-select v-model="wardId" clearable placeholder="Chọn phường xã">
      <el-option
        v-for="item in optionWard"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      />
    </el-select>
    <el-select v-model="type" clearable placeholder="Loại địa điểm">
      <el-option
        v-for="item in typePlaces"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button type="success" @click="fetchGetListPlace">Tìm kiếm</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="Số thứ tự" width="120" />
    <el-table-column prop="name" label="Tên địa điểm" width="180" />
    <el-table-column prop="description" label="Mô tả" width="180" />
    <el-table-column prop="address" label="Địa chỉ" />
    <el-table-column prop="map" label="Vị trí" />
    <el-table-column prop="type" label="Loại">
      <template #default="scope">
        <el-tag v-if="scope.row.type == 0">Ủy ban</el-tag>
        <el-tag v-if="scope.row.type == 1">Trường học</el-tag>
        <el-tag v-if="scope.row.type == 2">Trạm xá"</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="map" label="Thao tác">
      <template #default="scope">
        <div class="flex gap-4">
          <router-link :to="'/update-place/' + scope.row.id">
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
import { getListWard } from "../apis/ward";
import _ from "lodash";
import { deletePlaceById, getListPlace } from "../apis/place";
import { ElNotification } from "element-plus";
export default {
  created() {
    this.Delete = Delete;
    this.Edit = Edit;
    this.fetchGetListWards();
    this.fetchGetListPlace();
  },
  data() {
    return {
      wardId: "",
      type: "",
      tableData: [],
      optionWard: [],
      typePlaces: [
        {
          value: "0",
          label: "Ủy ban",
        },
        {
          value: "1",
          label: "Trường học",
        },
        {
          value: "2",
          label: "Trạm xá",
        },
      ],
    };
  },
  methods: {
    fetchGetListWards() {
      getListWard()
        .then((result) => {
          const keys = ["id", "name", "description", "createdAt", "updatedAt"];
          this.optionWard = _.map(result.data, (item) =>
            _.zipObject(keys, item)
          );
          console.log(this.tableData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchGetListPlace() {
      getListPlace()
        .then((result) => {
          const keys = [
            "id",
             "type",
            "name",
            "description",
            "address",
            "map",
            "createdAt",
            "updatedAt",
            "wardId",
           
          ];
          this.tableData = _.map(result.data, (item) =>
            _.zipObject(keys, item)
          );

          this.tableData = _.filter(this.tableData, (item) => {
            console.log(this.ward, this.type, item);
            if (this.wardId && this.type) {
              return +item?.wardId == +this.wardId && +item?.type == +this.type;
            }
            if (this.wardId) {
              return +item?.wardId == +this.wardId;
            }
            if (this.type) {
              return +item?.type == +this.type;
            }
            return true;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchDeleteById(id) {
      deletePlaceById(id)
        .then(() => {
          this.fetchGetListPlace();
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
