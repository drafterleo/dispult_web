<template>
  <el-menu
    :default-openeds="['1', '3']"
    :collapse="false"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <template slot="title">
        <i class="el-icon-time"></i>
        <span>ИСТОРИЯ ВЫЗОВОВ</span>
      </template>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>НАСТРОЙКИ</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">РЕГИСТРАЦИЯ</el-menu-item>
        <el-menu-item index="2-2">СЕТЬ</el-menu-item>
        <el-menu-item index="2-3">АУДИО</el-menu-item>
        <el-menu-item index="2-4">КОДЕКИ</el-menu-item>
        <el-menu-item index="2-5">LDAP</el-menu-item>
        <el-menu-item index="2-6">ОФОРМЛЕНИЕ</el-menu-item>
        <el-menu-item index="2-7">ДРУГОЕ</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3">
      <template slot="title">
        <i class="el-icon-refresh"></i>
        <span>ПЕРЕЗАГРУЗКА</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
    export default {
      name: 'SideMenu',
      data() {
        return {

        }
      }
    }
</script>

<style scoped>
  .el-menu {
    border-right: none;
  }
</style>
