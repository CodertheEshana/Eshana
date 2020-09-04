function mytouchingalgorithm(A,B){

    if(A.width/2+B.width/2>B.x-A.x && A.width/2+B.width/2>A.x-B.x&&A.height/2+B.height/2>B.y-A.y &&A.height/2+B.height/2>A.y-B.y    ){
      return true;
      
       }
       else{
       return false;
      
      
       }
      }
      function bounceofalgorithm(C,D){
        if(C.width/2+D.width/2>D.x-C.x && C.width/2+D.width/2>C.x-D.x&&C.height/2+D.height/2>D.y-C.y &&C.height/2+D.height/2>C.y-D.y    ){
         return true;
        
           }
           else{
         return false;
         
          
           }
  
        
      }