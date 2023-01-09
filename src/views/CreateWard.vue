<template>
  <el-form :label-position="'top'" label-width="100px">
    <el-form-item label="Tên phường xã">
      <el-input v-model="name" />
    </el-form-item>
    <el-form-item label="Mô tả phường xã">
      <el-input v-model="description" />
    </el-form-item>
    <el-button @click="fetchCreateWard" type="success">Success</el-button>
  </el-form>
</template>

<script>
import { createWard } from "../apis/ward";
import { ElNotification } from 'element-plus'
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    fetchCreateWard() {
      const data = new FormData();
      data.append("name", this.name);
      data.append("description", this.description);
      createWard(data)
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
  },
};
</script>
