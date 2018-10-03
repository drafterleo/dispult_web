<template>
  <div id="app" style="margin: 0; padding: 0;">
    <el-container style="min-height: 100vh; margin: 0; padding: 0;">
      <el-aside width="250px" style="background-color: #545c64">
        <side-menu></side-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div></div>
        </el-header>

        <el-main>
          <div></div>
        </el-main>

        <el-footer>
          <div></div>
        </el-footer>
      </el-container>

    </el-container>
  </div>
</template>

<script>

  import SideMenu from "./SideMenu";

  export default {
    name: 'app',
    components: {
      'side-menu' : SideMenu,
    },
    data () {
      return {
      }
    }
}
</script>

<style>
  .el-container {
    margin: 0;
  }

  .el-aside {
    padding: 0;
    margin: 0;
  }

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
