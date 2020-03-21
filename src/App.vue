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
  },
}
</script>

<style>
  :root {
    --primary-color: #FFFFFF;
    --secondary-color: #fee715ff;
    --tertiary-color: #181818;
    --text-primary-color: #111314;
    --text-secondary-color: #111314;
    --text-tertiary-color: #ffffff;
  }

  body {
    background: var(--primary-color);  /* fallback for old browsers */
    background-size: cover;
    font-family: "Roboto Light",sans-serif;
    color: var(--text-primary-color);;
    font-size: 14px;
    -webkit-text-size-adjust: none;
    overflow-x: hidden;
  }

  body, li, ol, ul {
    margin: 0;
    padding: 0;
  }

  * {
    outline: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }

  a {
    color: dodgerblue;
    cursor: pointer;
  }

  p {
    max-width: 600px;
  }

  h3 {
    color: var(--text-secondary-color);
  }

  pre {
    color: #FFFFFF;
    font-size: 1vw;
    background-color: #222222;
    border-radius: 16px;
    padding: 1em;
    max-width: 600px; 
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px 5px;
  }

  table {
    color: var(--text-primary-color);
    width: 100%;
    text-align: center;
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
    background: rgba(0, 0, 0, 0.05);
  }
  table thead {
    background: var(--text-primary-color);
    color: var(--primary-color);
  }
  table thead th {
    font-size: 15px;
    font-weight: bold;
  }
  table thead th:first-child {
    border-top-left-radius: 16px;
  }
  table thead th:last-child {
    border-top-right-radius: 16px;
  }
  table tbody td:first-child {
    text-align: left;
  }
  table tfoot td:first-child {
    text-align: left;
    border-bottom-left-radius: 16px;
  }
  table tfoot td:last-child {
    text-align: right;
    border-bottom-right-radius: 16px;
  }
  table tfoot td {
    font-weight: bold;
    background: var(--text-primary-color);
    color: var(--primary-color);
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
    max-width: 80vw;
    margin: 0 auto;
    text-align: left;
  }
</style>
