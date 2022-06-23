function MostraInc () { 
    document.getElementById('incremento').style.visibility = "visible";   
}
    function SomeInc () { 
    document.getElementById('incremento').style.visibility = "hidden";   
}
    
    
function VerificaSelecao() 
{
    document.getElementById('convertido').innerHTML = ""  //ZERA QUANDO CLICA
    if (document.getElementById("base").checked)  //SE FOR BASE
    {       document.getElementById('incremento').style.visibility = "hidden";  
        CodificaBase();

    }
    
    else if (document.getElementById("cifra").checked)
    { 
        CodificaCifra();
    }
}

    
function CodificaBase()
{
    let textoOriginal = document.getElementById('texto-original').value;
    let codificado = btoa(textoOriginal);
    document.getElementById('interno').innerHTML = "Base 64"  
    document.getElementById('convertido').innerHTML = codificado  
}
    
function CodificaCifra()
{
    
   //document.getElementById('interno').innerHTML = "Cifra de César"  
  //  const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const textoOriginal = document.getElementById('texto-original').value;
    const numCifra = parseInt(document.getElementById('incremento').value);
    
    

   for (let j=0; j<textoOriginal.length; j++) //RODA AS LETRAS DA PALAVRA
    {
       
         if (textoOriginal[j].charCodeAt()>=97 && textoOriginal[j].charCodeAt() <= 122)
            {
              document.getElementById('convertido').innerText+= String.fromCharCode(((textoOriginal[j].charCodeAt()-97+numCifra)%26)+97); //COLOCA NO PARAGRAFO DE CONVERSÃO O VALOR DA LETRA + A QNT DE SALTO DE LETRA  
                console.log(((textoOriginal[j].charCodeAt()+numCifra)%25)+75)
            }
        
        
        else if (textoOriginal[j].charCodeAt()>=65 && textoOriginal[j].charCodeAt() <= 90)
            {
              document.getElementById('convertido').innerText+= String.fromCharCode(((textoOriginal[j].charCodeAt()-65+numCifra)%26)+65); //COLOCA NO PARAGRAFO DE CONVERSÃO O VALOR DA LETRA + A QNT DE SALTO DE LETRA  
                
            }
        
        else 
            {
                document.getElementById('convertido').innerText+= String.fromCharCode(textoOriginal[j].charCodeAt()); //COLOCA NO PARAGRAFO DE CONVERSÃO O VALOR DA LETRA + A QNT DE SALTO DE LETRA  
                                                                                      
            }
            
            
            
       
        
        
    }
       
       //for (let i=0; i<alfabeto.length; i++) //RODA AS LETRAS DO ALFABETO
      /*  {
            if (textoOriginal[j].toLowerCase()===alfabeto[i]) //COMPARA LETRA DA PALAVRA COM ALFABETO
                {
                    document.getElementById('convertido').innerHTML += alfabeto[(i+numCifra)%alfabeto.length]; //COLOCA NO PARAGRAFO DE CONVERSÃO O VALOR DA LETRA + A QNT DE SALTO DE LETRA  
                    break; //SAI DO FOR DAS LETRAS DO ALFABETO

                }
            else if(textoOriginal[j].toLowerCase() === ' ' || isNaN(textoOriginal[j].toLowerCase()) === false) //MANTEM O VAZIO E OS NUMEROS
            	{
                
                  document.getElementById('convertido').innerHTML += textoOriginal[j];  
                    break;
                }
        }*/
 
}
    