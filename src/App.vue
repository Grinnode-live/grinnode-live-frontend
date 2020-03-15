<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default {
  name: 'App',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
  body {
    background: #021B79;  /* fallback for old browsers */
    background-size: cover;
    font-family: "Roboto Light",sans-serif;
    color: #fff;
    font-size: 14px;
    -webkit-text-size-adjust: none;
    overflow-x: hidden;
  }

  body, li, ol, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  * {
    outline: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }

  a {
    color: #7ebeff;
  }

  pre {
    background-color: rgb(10, 10, 30);
    border-radius: 16px;
    padding: 1em;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px 5px;
  }

  table {
    border-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 20px 5px;
    border-radius: 16px;
  }
  table td, table th {
    padding: 20px;
  }
  table tbody td {
    font-size: 13px;
  }
  table tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.1);
  }
  table thead {
    background: rgba(255, 255, 255, 0.1);
  }
  table thead th {
    font-size: 15px;
    font-weight: bold;
    color: #FFFFFF;
  }
  table thead th:first-child {
    border-top-left-radius: 16px;
  }
  table thead th:last-child {
    border-top-right-radius: 16px;
  }
  table tfoot td:first-child {
    border-bottom-left-radius: 16px;
  }
  table tfoot td:last-child {
    border-bottom-right-radius: 16px;
  }
  table tfoot td {
    font-weight: 600;
    background: rgba(255, 255, 255, 1);
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .body_wrapper {
    padding-top: 100px;
    min-height: 100vh;
  }

  .body_wrapper, .content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .content {
    flex-grow: 1;
  }

  .container_header {
    font-size: 2.2rem;
    text-align: left;
  }

  .home {
    width: 100%;
  }

  .home_container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
  }
</style>
