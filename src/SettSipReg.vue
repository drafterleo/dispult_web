<template>
  <div>
    <el-row :gutter="10">
      <el-col :sm="24" :lg="12">
        <h2 class="page-title">Настройка регистрации</h2>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :sm="12" :lg="6">
        <span><b>SIP номер<span style="color:red">*</span></b></span>
        <el-input></el-input>
      </el-col>
      <el-col :sm="12" :lg="6">
        <span><b>Пароль<span style="color:red">*</span></b></span>
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :sm="24" :lg="12">
        <span><b>Сервер регистрации<span style="color:red">*</span></b></span>
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <button type="primary">Сохранить</button>
      <button type="primary">Применить</button>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "SettSipReg"
    }
</script>

<style scoped>
  .el-input {
    margin-top: 5px;
  }

  .el-row {
    margin-bottom: 20px;
  }

</style>
