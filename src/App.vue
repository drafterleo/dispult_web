<template>
  <div id="app" style="margin: 0; padding: 0;">
    <el-container style="min-height: 100vh; margin: 0; padding: 0;">
      <el-aside width="250px" style="background-color: #545c64">
        <side-menu></side-menu>
      </el-aside>

      <el-container>
        <el-header>
          <h1 class="logo"><strong>ПОС Простор 2</strong></h1>
        </el-header>

        <el-main>
          <sett-sip-reg></sett-sip-reg>
        </el-main>

        <el-footer>
        </el-footer>
      </el-container>

    </el-container>
  </div>
</template>

<script>

  import SideMenu from "./SideMenu";
  import SettSipReg from "./SettSipReg"

  export default {
    name: 'app',
    components: {
      'side-menu' : SideMenu,
      'sett-sip-reg': SettSipReg,
    },
    data () {
      return {
        page: 'SettSipReg',
      }
    }
}
</script>

<style>
  html * {
    font-family: Arial !important;
  }

  .logo {
    margin-top: 0px;
    color: inherit;
    /*font-family: "Roboto Slab", serif;*/
    font-size: 2em;
  }

  .page-title {
    margin-top: 0;
    margin-bottom: 30px;
    padding-top: 5px;
    border-top: 3px solid #409EFF;
  }

  .el-header,
  .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    line-height: 60px;
  }

  /* Button */
  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button,
  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: transparent;
    border-radius: 0.375em;
    border: 0;
    box-shadow: inset 0 0 0 2px #409EFF;
    color: #555555 !important;
    cursor: pointer;
    display: inline-block;
    /*font-family: "Roboto Slab", serif;*/
    font-size: 0.8em;
    font-weight: 700;
    height: 3.5em;
    letter-spacing: 0.075em;
    line-height: 3.5em;
    padding: 0 2.25em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap; }

  button:focus {
    outline: none;
  }

  input[type="submit"]:hover,
  input[type="reset"]:hover,
  input[type="button"]:hover,
  button:hover,
  .button:hover {
    background-color: rgba(64, 158, 255, 0.05); }

  input[type="submit"]:active,
  input[type="reset"]:active,
  input[type="button"]:active,
  button:active,
  .button:active {
    background-color: rgba(64, 158, 255, 0.15); }

  input[type="submit"].icon:before,
  input[type="reset"].icon:before,
  input[type="button"].icon:before,
  button.icon:before,
  .button.icon:before {
    margin-right: 0.5em; }

  input[type="submit"].fit,
  input[type="reset"].fit,
  input[type="button"].fit,
  button.fit,
  .button.fit {
    width: 100%; }

  input[type="submit"].small,
  input[type="reset"].small,
  input[type="button"].small,
  button.small,
  .button.small {
    font-size: 0.6em; }

  input[type="submit"].large,
  input[type="reset"].large,
  input[type="button"].large,
  button.large,
  .button.large {
    font-size: 1em;
    height: 3.65em;
    line-height: 3.65em; }

  input[type="submit"].primary,
  input[type="reset"].primary,
  input[type="button"].primary,
  button.primary,
  .button.primary {
    background-color: #409EFF;
    box-shadow: none;
    color: #ffffff !important; }

  input[type="submit"].primary:hover,
  input[type="reset"].primary:hover,
  input[type="button"].primary:hover,
  button.primary:hover,
  .button.primary:hover {
    background-color: #409EFF; }

  input[type="submit"].primary:active,
  input[type="reset"].primary:active,
  input[type="button"].primary:active,
  button.primary:active,
  .button.primary:active {
    background-color: #409EFF; }

  input[type="submit"].disabled, input[type="submit"]:disabled,
  input[type="reset"].disabled,
  input[type="reset"]:disabled,
  input[type="button"].disabled,
  input[type="button"]:disabled,
  button.disabled,
  button:disabled,
  .button.disabled,
  .button:disabled {
    pointer-events: none;
    opacity: 0.25; }

</style>
