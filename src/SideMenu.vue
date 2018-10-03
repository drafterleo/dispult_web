<template>
  <el-menu
    :default-openeds="['1', '3']"
    :collapse="false"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template slot="title">Group 1</template>
        <el-menu-item index="1-1">Option 1</el-menu-item>
        <el-menu-item index="1-2">Option 2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="1-3">Option 3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">Option4</template>
        <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </template>
      <el-menu-item-group>
        <template slot="title">Group 1</template>
        <el-menu-item index="2-1">Option 1</el-menu-item>
        <el-menu-item index="2-2">Option 2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="2-3">Option 3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <template slot="title">Option 4</template>
        <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>Navigator Three</span>
      </template>
      <el-menu-item-group>
        <template slot="title">Group 1</template>
        <el-menu-item index="3-1">Option 1</el-menu-item>
        <el-menu-item index="3-2">Option 2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group 2">
        <el-menu-item index="3-3">Option 3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <template slot="title">Option 4</template>
        <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
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

</style>
