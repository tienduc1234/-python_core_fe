<template>
  <el-form :label-position="'top'" label-width="100px">
    <el-form-item label="Tên địa điểm">
      <el-input v-model="name" />
    </el-form-item>
    <el-form-item label="Mô tả địa điểm">
      <el-input v-model="description" />
    </el-form-item>
    <el-form-item label="Địa điểm">
      <el-input v-model="address" />
    </el-form-item>
    <el-form-item label="Vị trí map">
      <el-input v-model="map" />
    </el-form-item>
    <el-form-item label="Phường xã">
      <el-select v-model="wardId" clearable placeholder="Chọn phường xã">
        <el-option
          v-for="item in optionWard"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Loại ">
      <el-select v-model="type" clearable placeholder="Loại địa điểm">
        <el-option
          v-for="item in typePlaces"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-button @click="fetchCreatePlace" type="success"
      >Tạo mới địa điểm</el-button
    >
  </el-form>
</template>

<script>
import { createPlace } from "../apis/place";
import { getListWard } from "../apis/ward";
import _ from "lodash";
import { ElNotification } from "element-plus";
export default {
  created() {
    this.fetchGetListWards();
  },
  data() {
    return {
      name: "",
      description: "",
      address: "",
      map: "",
      wardId: "",
      type: "",
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
      optionWard: [],
    };
  },
  methods: {
    fetchCreatePlace() {
      const data = new FormData();
      data.append("name", this.name);
      data.append("description", this.description);
      data.append("address", this.address);
      data.append("map", this.map);
      data.append("wardId", this.wardId);
      data.append("type", this.type);
      createPlace(data)
        .then((result) => {
          console.log(result);
          ElNotification({
            title: "Success",
            message: "This is a success message",
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
           ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
        });
    },
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
  },
};
</script>
