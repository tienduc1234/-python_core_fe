<template>
  <el-form :label-position="'top'" label-width="100px">
    <el-form-item label="Tên địa điểm">
      <el-input v-model="placeDetails.name" />
    </el-form-item>
    <el-form-item label="Mô tả địa điểm">
      <el-input v-model="placeDetails.description" />
    </el-form-item>
    <el-form-item label="Địa điểm">
      <el-input v-model="placeDetails.address" />
    </el-form-item>
    <el-form-item label="Vị trí map">
      <el-input v-model="placeDetails.map" />
    </el-form-item>
    <el-form-item label="Phường xã">
      <el-select v-model="placeDetails.wardId" clearable placeholder="Chọn phường xã">
        <el-option
          v-for="item in optionWard"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Loại ">
      <el-select v-model="placeDetails.type" clearable placeholder="Loại địa điểm">
        <el-option
          v-for="item in typePlaces"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-button @click="fetchUpdatePlace" type="success"
      >Cập nhật địa điểm</el-button
    >
  </el-form>
</template>

<script>
import {  getPlaceById, updatePlaceById } from "../apis/place";
import _ from "lodash";
import { getListWard } from "../apis/ward";
import { ElNotification } from 'element-plus'
export default {
  created() {
    this.placeId = this.$route.params.id;
    this.fetchGetListWards();
    this.fetchGetPlaceDetails();
  },
  data() {
    return {
      placeDetails: {
        id: "",
        name: "",
        description: "",
        address: "",
        map: "",
        wardId: "",
        type: "",
      },
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
    fetchUpdatePlace() {
      const data = new FormData();
      data.append("name", this.placeDetails.name);
      data.append("description", this.placeDetails.description);
      data.append("address", this.placeDetails.address);
      data.append("map", this.placeDetails.map);
      data.append("wardId", this.placeDetails.wardId);
      data.append("type", this.placeDetails.type);
      updatePlaceById( this.placeId,data)
        .then((result) => {
          console.log(result);
           ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
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
    fetchGetPlaceDetails() {
      getPlaceById(this.placeId)
        .then((result) => {
          console.log("log",result.data)
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
          this.placeDetails = _.zipObject(keys, _.head(result.data));
          console.log("this.placeDetails",this.placeDetails);
        })
        .catch((err) => {
          console.log(err);
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
