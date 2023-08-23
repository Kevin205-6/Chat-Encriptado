
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't',
'u', 'v', 'w', 'x', 'y', 'z'];


let key = "";

$(document).ready (function(){
    $('#ci').click(function(){

         //para cifar se usa la funcion y = (x+z)mod27

         //obtener los datos de los campos de texto
          key = document.getElementById('llave').value;

          key= key.replace(/ /g , '');

          //Obtener el mensaje 
          let mess = document.getElementById('mess').value;

          mess = mess.replace(/ /g, '');

          let newMess = "";
        
          let keyComple = "";

          // algoritmo 
          if(revison(mess,key)){
            
            for(var i=0; i<mess.length; i++){

                 keyComple += key.charAt((i%Number(key.length)));

            }
            alert(keyComple);

            for(var i =0; i<mess.length;i++){
                //obtener la poscion de la letra por letra del mensaje 
                let charr= mess.charAt(i);
                let posm = getPosition(charr);

                    charr = keyComple.charAt(i);
                let posk = getPosition(charr);
                

                //ejecutamos el algoritmo

                let newValue = change(posm,posk)

                newMess += alphabet[newValue];// mensaje cifrado
            }

            //imprimier el resutlado
            document.getElementById('rs').value = newMess;

          }else{

          }

    });
    $('#de').click(function(){

        //para cifar se usa la funcion y = (x+z)mod27

        //obtener los datos de los campos de texto
         key = document.getElementById('llave').value;

         key= key.replace(/ /g , '');

         //Obtener el mensaje 
         let mess = document.getElementById('mess').value;

         mess = mess.replace(/ /g, '');

         let newMess = "";
       
         let keyComple = "";

         // algoritmo 
         if(reivison(mess,key)){
           
           for(var i=0; i<mess.length; i++){

                keyComple += key.charAt((i%Number(key.length)));

           }
           alert(keyComple);

           for(var i =0; i<mess.length;i++){
               //obtener la poscion de la letra por letra del mensaje 
               let charr= mess.charAt(i);
               let posm = getPosition(charr);

                   charr = keyComple.charAt(i);
               let posk = getPosition(charr);
               

               //ejecutamos el algoritmo

               let newValue = rechange(posm,posk)

               newMess += alphabet[newValue]; //mesaje desifrado
           }

           //imprimier el resutlado
           document.getElementById('rs').value = newMess;

         }else{

         }

   });

});

// cambio 

function change(posm,posk){
    // aplicamos Y = (X+Z)mod27
    let y = (posm+posk)%27;
    return y;
    

}

function rechange(posm,posk){
    let val =0;
    if((posm - posk) >=0){
        val = (posm+posk)%27;
    
    }else{
         val= (posm-posk+27)%27;
    }
    return val;
}

function getPosition(letra){
    let position = alphabet.indexOf(letra);
    return position;
}

function revison(mess, desp){

    const re = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/ 

    var acc = true;

    if(!re.test(mess)){
        sd();
        acc = false;
    }
    if (!re.test(desp)) {
        sdd();
        acc= false;
    }
    if(desp.length > mess.length){
        sz();
        return acc;
    }
}

function sd(){
    Swal.fire({
        title:"Error", 
        texto:"el texto ingresado no a sido aceptado, ingrese solo minusculas y evite nuemros y simbolos",
        icon:'error'
    });

}

function sdd(){
    Swal.fire({
        title:"Error", 
        texto:"la clave ingresada no a sido aceptado, ingrese solo minusculas y evite nuemros y simbolos",
        icon:'error'
    });
    
}
function sz(){
    Swal.fire({
        title:"Error", 
        texto:"la clave no puede ser mayor que el mensaje ",
        icon:'error'
    });
    
}