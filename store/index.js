

export const state = () => ({
    URL: "http://127.0.0.1:8081",
    usuario: {
        status: false,
        data: null,
        token: 'no token'
      },
     
})


export const mutations = {
    SET_UsuarioStore(state, data) {
      state.usuario.status = true;
      state.usuario.data = data.usuario;
      state.usuario.token = data.token;
    },
    LOG_OUT(state) {
      state.usuario.status = false;
      state.usuario.data = null;
      state.usuario.token = null;
    },
  }



  export const actions = {
    guardarUsuario({ commit }, data){
      
      if (data!==null) {
        localStorage.setItem('usuario', JSON.stringify( data)) 
        commit("SET_UsuarioStore", 
            data
        );
      } else {
        commit("SET_UsuarioStore", null);        
      }
    },

    readUserLocalStorage({commit}){
      if (process.client) {
        console.log('Leer usuario')
        const usuariolocal =   localStorage.getItem('usuario')
     

        if(usuariolocal){
          let data = JSON.parse(usuariolocal)
          
          commit('SET_UsuarioStore', data)
        }
        } else {
          commit("LOG_OUT");
        }
      },
      cerrarSesion({commit}){
        commit("LOG_OUT");
        localStorage.removeItem('usuario')
        localStorage.removeItem('store')  
        $nuxt.$router.push('/')
      }
}