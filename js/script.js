var app = new Vue({
    el:"#app",
    data:{
      arrayVuoto:'',
      indexUtenteSelezionato:0,

      mioProfilo:{
          nome:'Giorgia',
         avatar:'img/avatar_6.jpg',
          },

      contatti:[
          {
            nome:'Michele',
            avatar:'img/avatar_1.jpg',
            visible:'true',
            messages: [
             {
               date: '10/01/2020 15:30:55',
               text: 'Hai portato a spasso il cane?',
               status: 'sent'
             },
             {
               date: '10/01/2020 15:50:00',
               text: 'Ricordati di dargli da mangiare',
               status: 'sent'
             },
             {
               date: '10/01/2020 16:15:22',
               text: 'Tutto fatto!',
               status: 'received'
             }
               ],
          },

          {
            nome:'Giovanni',
            avatar:'img/avatar_2.jpg',
            messages: [
             {
               date: '10/01/2020 15:30:55',
               text: 'Ciao come stai?',
               status: 'sent'
             },
             {
               date: '10/01/2020 15:50:00',
               text: 'Bene grazie stasera ci vediamo?',
               status: 'received'
             },
             {
               date: '10/01/2020 16:15:22',
               text: 'Mi piacerebbe ma devo andare a fare la spesa',
               status: 'sent'
             }
               ],
          },
          {
            nome:'Tommaso',
            avatar:'img/avatar_3.jpg',
            messages: [
             {
               date: '10/01/2020 15:30:55',
               text: 'La Marianna va in campagna',
               status: 'received'
             },
             {
               date: '10/01/2020 15:50:00',
               text: 'Sicuro di non aver sbagliato chat?',
               status: 'sent'
             },
             {
               date: '10/01/2020 16:15:22',
               text: 'Hai ragione scusami',
               status: 'received'
             }
               ],
          },
          {
            nome:'Giulio',
            avatar:'img/avatar_4.jpg',
            messages: [
             {
               date: '10/01/2020 15:30:55',
               text: 'Lo sai che ha aperto una nuova pizzeria',
               status: 'sent'
             },
             {
               date: '10/01/2020 15:50:00',
               text: 'si ma preferisco andare al cinema',
               status: 'received'
             },

               ],
          },
      ]
    },
    methods: {
      aggiungiContatto(index){
        this.indexUtenteSelezionato=index;
        console.log(index);
      },
      aggiungiTesto(){
        this.contatti.push(this.arrayVuoto);
        this.arrayVuoto='';
      }
    }
  });
