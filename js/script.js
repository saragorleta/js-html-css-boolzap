var app = new Vue({
    el:"#app",
    data:{
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
    }
  });

  //   for(let i = 0; i < contatti.length; i++){
  //   //destrutturiamo
  //   const {nome,avatar} = contatti[i];
  //
  //   //stampiamoli usando il template literal
  //   document.getElementByClassName('contatti').innerHTML += `
  //   <div>
  //
  //     ${avatar} - ${nome}
  //   </div>
  //   `;
  // }
