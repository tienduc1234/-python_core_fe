<template>
  <el-form :label-position="'top'" label-width="100px">
    <el-form-item label="Tên phường xã">
      <el-input v-model="wardDetails.name" />
    </el-form-item>
    <el-form-item label="Mô tả phường xã">
      <el-input v-model="wardDetails.description" />
    </el-form-item>
    <el-button @click="fetchUpdateWard" type="success">Cập nhật </el-button>
  </el-form>
</template>

<script>
import {  getWardById, updateWardById } from "../apis/ward";
import _ from "lodash"
import { ElNotification } from 'element-plus'
export default {
  data() {
    return {
      wardDetails: {
        name: "",
        description: "",
      },
    };
  },
  created() {
    this.wardId = this.$route.params.id;
    this.fetchWardDetails();
  },
  methods: {
    fetchUpdateWard() {
      const data = new FormData();
      data.append("name", this.wardDetails.name);
      data.append("description", this.wardDetails.description);
      updateWardById(this.wardId,data)
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
    fetchWardDetails() {
      getWardById(this.wardId)
        .then((result) => {
           const keys = ["id", "name", "description", "createdAt", "updatedAt"];
          this.wardDetails = _.zipObject(keys, _.head(result.data));
          console.log("this.wardDetails",_.filter(this.wardDetails,{name:'ads'}));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
