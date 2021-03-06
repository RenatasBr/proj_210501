  /* skaičių apvalinimas */

  console.log("---skaičių apvalinimas---");
    
  var kint1 = 7.14125
  console.log("nesuapvalinta reikšmė: " + kint1);
  
  kint1 = kint1.toFixed (2);
  console.log("funkcijos .toFixed panaudojimas - reikšmė: " + kint1);
      
  kint1 = 7.14125
  kint1 = Math.round(kint1*100) / 100;
  console.log("apvalinimas iki N pozicijos kitu būdu - reikšmė: " + kint1);
      
  /* atsitiktinių skaičių nuo 0 iki 4 generavimas */   
  
  var kint2, kint3;
  var txt_A = "--- atsitiktinių skaičių nuo 0 - 4 generavimas ---";

  console.log(txt_A);
  console.log("ats. skaičius a: " + ( (Math.random(kint2)*4 - (Math.random(kint3)/4) ) ) );
  console.log("ats. skaičius b: " + ( (Math.random(kint2)*4 - (Math.random(kint3)/4) ) ) );

  /* 2 atsitiktinių skaičių nuo 16 iki 40 generavimas */   

  let kmin = 16;
  let kmax = 40;
  let txt_b = "---užduotis: atsitiktiniai skaičiai nuo 16 iki 40---";
  
  console.log(txt_b);
  kint10 = kmin + Math.floor(Math.random() * (1 + kmax - kmin));
  console.log("ats. skaičius a: " + kint10);
  kint11 = kmin + Math.floor(Math.random() * (1 + kmax - kmin));
  console.log("ats. skaičius b: " + kint11);
  if (kint10 > kint11){
      console.log( "rezultatas - max/ min: " + (kint10 / kint11).toFixed(2) );
  }
  else{ 
      console.log( "rezultatas - max/ min: " + (kint11/kint10).toFixed(2) );
  }


  /* 3 atsitiktinių skaičių nuo 0 iki 25 generavimas */

  let lmin = 0;
  let lmax = 25;
  let txt_c = "---užduotis: 3 skaičiai nuo 0 iki 25. rodyti vidurinę reikšmę iš 3 skaičių imties.---";
  
  console.log(txt_c);
  kint20 = lmin + Math.floor(Math.random() * (1 + lmax - lmin));
  console.log("atsitiktinis skaičius a: " + kint20);
  kint21 = lmin + Math.floor(Math.random() * (1 + lmax - lmin));
  console.log("atsitiktinis skaičius b: " + kint21);
  kint22 = lmin + Math.floor(Math.random() * (1 + lmax - lmin));
  console.log("atsitiktinis skaičius c: " + kint22);

  if ( kint20==kint21 || kint21==kint22 || kint20==kint22) {
      console.log ("rezultatas: bent du skaičiai sutampa.");
  }

  if ( (kint20 > kint21 && kint20 < kint22) ||
       (kint20 < kint21 && kint20 > kint22) ) {
      console.log("rezultatas: " + kint20);
  }
  
  if ( (kint21 > kint20 && kint21 < kint22) ||
       (kint21 < kint20 && kint21 > kint22) ) {
      console.log("rezultatas: " + kint21);
  }
      
  if ( (kint22 > kint21 && kint22 < kint20) ||
       (kint22 < kint21 && kint22 > kint20) ) {
      console.log("rezultatas: " + kint22);
  }

  /* užduotis: trikampio kraštinės */
  let xmin = 1;
  let xmax = 10;
  let txt_d = "---užduotis: trikampio kraštinės---";
  
  console.log(txt_d);
  
  kr_a = xmin + Math.floor(Math.random() * (1 + xmax - xmin));
  kr_b = xmin + Math.floor(Math.random() * (1 + xmax - xmin));
  kr_c = xmin + Math.floor(Math.random() * (1 + xmax - xmin));
  console.log("kraštinė a: " + kr_a)
  console.log("kraštinė b: " + kr_b)
  console.log("kraštinė c: " + kr_c)

  if ( kr_a==kr_b  || kr_b==kr_c || kr_a==kr_c) {
      console.log ("rezultatas: bent dviejų kraštinių ilgiai sutampa.");
  }
  
  if ( (kr_a + kr_b > kr_c) &&
       (kr_a + kr_c > kr_b) &&
       (kr_b + kr_c > kr_a) ) {
          console.log ("rezultatas: turim trikampį.");
          } 
          else{
          console.log ("rezultatas: neturim trikampio.");
          }