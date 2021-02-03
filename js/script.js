var app = new Vue({
    el:"#app",
    data:{
      
      indexUtenteSelezionato:0,

      mioProfilo:

        {
          nome:'Giorgia',
         avatar:'img/avatar_6.jpg'
        }
      ,
      contatti:[
          {
            nome:'Michele',
            avatar:'img/avatar_1.jpg'
          },
          {
            nome:'Giovanni',
            avatar:'img/avatar_2.jpg'
          },
          {
            nome:'Tommaso',
            avatar:'img/avatar_3.jpg'
          },
          {
            nome:'Giulio',
            avatar:'img/avatar_4.jpg'
          },
      ]
    },
    methods: {
      aggiungiContatto(index){
        this.indexUtenteSelezionato=index;
        console.log(index);
      }
    }
  });
