<template>
  <div id="app" :class="{ 'hide-menu' : !isMenuVisible || !user}">
   <Header title="Monitoramento de Idosos" :hideToggle="!user" :hideUserDropdown="!user"/>
   <Menu v-if="user"/>
   <Loading v-if="isLoadingApp" />
   <Content v-else />
   <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import { baseApiUrl, userKey } from '@/global';
import { mapState } from 'vuex';
import Header from '@/components/template/Header';
import Menu from '@/components/template/Menu';
import Content from '@/components/template/Content';
import Footer from '@/components/template/Footer';
import Loading from '@/components/template/Loading';

export default {
  name: 'App',
  components: {
    Header, Menu, Content, Footer, Loading
  },
  data: function() {
    return {
      mensagem: 'digite sua mensagem'
    }
  },
  computed: mapState(['isMenuVisible', 'user', 'isLoadingApp']),
  methods: {
    async validateToken() {
      this.$store.commit('setIsLoadingApp', true);

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit('setUser', null);

      if(!userData) {
        this.$store.commit('setIsLoadingApp', false);
        this.$router.push({ name: 'auth' });//TODO se o usuario acessa a pagina /auth diretamente ocorre erro Avoided redundant navigation to current location: "/auth"
        return;
      }

      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

      if(res.data) {
        this.$store.commit('setUser', userData);
        //TODO esse seria o local de redirecionar o usuario para uma página dependendo da permissao
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: 'auth' });
      }

      this.$store.commit('setIsLoadingApp', false);

    }
  },
  created() {
    this.validateToken();
  }
}
</script>

<style>
  * {
    font-family: 'Lato', sans-serif;
    
  }

  body {
    margin: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr 40px;
    grid-template-columns: 300px 1fr;
    grid-template-areas: 
      "header header"
      "menu content"
      "menu footer";
  }

  #app.hide-menu {
    grid-template-areas: 
      "header header"
      "content content"
      "footer footer";
  }
</style>
