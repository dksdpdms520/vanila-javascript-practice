for(i =1 ; i < 31; i++){

  if(i < 10){
      var one = i;
  }else{
      var one = Math.floor(i % 10);
      var ten = Math.floor(i / 10);
  }
  if(one === 3 || one === 6 || one === 9 || ten === 3 || ten === 6 || ten === 9 ){
      console.log("짝!");
  }else{
      console.log(i);
  }
}
// 369게임
