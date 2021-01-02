function bounceOff(orange,pineapple){
    if (orange.x - pineapple.x < pineapple.width/2 + orange.width/2
      && pineapple.x - orange.x < pineapple.width/2 + orange.width/2) {
    orange.velocityX = orange.velocityX * (-1);
    pineapple.velocityX = pineapple.velocityX * (-1);
  }
  if (orange.y - pineapple.y < pineapple.height/2 + orange.height/2
    && pineapple.y - orange.y < pineapple.height/2 + orange.height/2){
    orange.velocityY = orange.velocityY * (-1);
    pineapple.velocityY = pineapple.velocityY * (-1);
  }
  }