<template>
  <div class="nav">
      <ul>
        <li><router-link to='/movie/top250'>Top250</router-link></li>
        <li><router-link to='/movie/hot'>正在热映</router-link></li>
        <li><router-link to="/movie/coming">即将上映</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  // name: 'common',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.nav {
      height: 1rem;
      background: rgb(33,150,243);
      position: fixed;
      top: 1rem;
      width: 100%;
    }

   .nav  ul {
      display: flex;
    }
    .nav ul li {
      flex: 1;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
    .nav a {
      color: #ccc;
      outline: none;
    }
    .nav a:router-link-active {
      color: #fff;
    }

</style>
