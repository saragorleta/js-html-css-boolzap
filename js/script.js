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
            ciao: moment().format(' h:mm:ss'),

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
            visible:'true',

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
            visible:'true',
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
            visible:'true',
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
      nomeFiltrato:'',
      orario:'',
      hour:'',
    },

    methods: {

      aggiungiContatto(index){
        const orario=moment().format(' h:mm:ss');
        this.indexUtenteSelezionato=index;
        console.log(index);
        this.hour=orario;

      },

      aggiungiTesto(){
          const ora=moment().format(' h:mm:ss');
          let nuovoMessaggio=
          {
            date:ora,
            text: this.parolaDigitata,
            status: 'sent'
          }
        this.orario=ora;
        this.contatti[this.indexUtenteSelezionato].messages.push(nuovoMessaggio);
        setTimeout(this.aggiungiOk,2000);
      },

        aggiungiOk(){
        let rispostaMessaggio=
        {
          date:moment().format(' h:mm:ss'),
          text:this.parolaOk,
          status: 'received'
        }
        this.contatti[this.indexUtenteSelezionato].messages.push(rispostaMessaggio);
      },

        elementoFiltrato(){
        this.contatti.forEach((element) => {
          if (element.nome.includes(this.nomeFiltrato))
          { this.visible=true;
          } else{
            this.visible=false;
          }
        })
      },
    }
  });
