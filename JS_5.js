

var delay = 150;
car.style.left=-350+'px';

function Car(pixels){
    var bottom = car.offsetLeft;
    car.style.left = bottom + pixels + 'px';	

    if (bottom + pixels>1000)
    {
    car.style.left=-450+'px';
   
    }

}
setTimeout("Car(20)", 100000);

setInterval("Car(20)", delay);

