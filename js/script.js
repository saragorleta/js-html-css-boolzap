var app = new Vue({
    el:"#app",
    data:{

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
               date: moment().format(' h:mm:ss'),
               text: 'Hai portato a spasso il cane?',
               status: 'sent'
             },
             {
               date: moment().format(' h:mm:ss'),
               text: 'Ricordati di dargli da mangiare',
               status: 'sent'
             },
             {
               date: moment().format(' h:mm:ss'),
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
               date: moment().format(' h:mm:ss'),
               text: 'Ciao come stai?',
               status: 'sent'
             },
             {
               date: moment().format(' h:mm:ss'),
               text: 'Bene grazie stasera ci vediamo?',
               status: 'received'
             },
             {
               date: moment().format(' h:mm:ss'),
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
               date: moment().format(' h:mm:ss'),
               text: 'La Marianna va in campagna',
               status: 'received'
             },
             {
               date: moment().format(' h:mm:ss'),
               text: 'Sicuro di non aver sbagliato chat?',
               status: 'sent'
             },
             {
               date: moment().format(' h:mm:ss'),
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
               date: moment().format(' h:mm:ss'),
               text: 'Lo sai che ha aperto una nuova pizzeria',
               status: 'sent'
             },
             {
               date: moment().format(' h:mm:ss'),
               text: 'si ma preferisco andare al cinema',
               status: 'received'
             },
               ],
          },
      ],

      parolaDigitata:'',

      parolaOk:'Ok',

      indexUtenteSelezionato:0,
    },

    methods: {
      aggiungiContatto(index){
        this.indexUtenteSelezionato=index;
        console.log(index);
      },

      aggiungiTesto(){
          let nuovoMessaggio={
          date:moment().format(' h:mm:ss'),
          text: this.parolaDigitata,
          status: 'sent'
          }
        this.contatti[this.indexUtenteSelezionato].messages.push(nuovoMessaggio);
        setTimeout(this.aggiungiOk,2000);
      },

        aggiungiOk(){
        let rispostaMessaggio={
          date:moment().format(' h:mm:ss'),
          text:this.parolaOk,
          status: 'received'
        }
        this.contatti[this.indexUtenteSelezionato].messages.push(rispostaMessaggio);

      },
      // var ages = [32, 33, 16, 40];
      //
      // function checkAdult(age) {
      //   return age >= 18;
      // }
      //
      // function myFunction() {
      //   document.getElementById("demo").innerHTML = ages.filter(checkAdult);
      // }

      //***************
      // function contattoFiltrato(){
      //   const contact=this.contatti;
      //   return contact.filter();
      //}
      // });
    }
  });
