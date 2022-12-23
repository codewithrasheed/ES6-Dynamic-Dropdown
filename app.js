var mobiles = {
  Samsung: ['Select Option','A30','Note10','S10'],
  Apple: ['Select Option','iphone4','iphone4s','iphone5','iphone6'],
  Xiaomi: ['Select Option','redminote10','redminote11','redmi10','redmi10pro']
}
var main = document.getElementById('main_menu')
var sub = document.getElementById('sub_menu')

main.addEventListener('change', function() {

var selected_option = mobiles[this.value]

while(sub.options.length > 0) {
sub.options.remove(0);
}

Array.from(selected_option).forEach(function(el){
let option = new Option(el,el)
sub.appendChild(option);
});
});

function getSelectValue()
{
  var selectedValue = document.getElementById("main_menu").value;

  var secondSelectValue = document.getElementById("sub_menu").value;

  if(selectedValue == "Samsung" && secondSelectValue == "A30"){
    console.log(" Name: Samsung A30 \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 2000")
  } else if(selectedValue == "Samsung" && secondSelectValue == "Note10") {
    console.log(" Name: Samsung Note 10 \n RAM: 6GB \n ROM: 128GB \n Camera: 50px \n Price: 4000")
  } else if(selectedValue == "Samsung" && secondSelectValue == "S10") {
    console.log(" Name: Samsung S10 \n RAM: 3GB \n ROM: 128GB \n Camera: 10px \n Price: 5000")
  } else if(selectedValue == "Apple" && secondSelectValue == "iphone4") {
    console.log(" Name: Apple iPhone 4 \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 10000")
  } else if(selectedValue == "Apple" && secondSelectValue == "iphone4s") {
    console.log(" Name: Apple iPhone 4s \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 20000")
  } else if(selectedValue == "Apple" && secondSelectValue == "iphone5") {
    console.log(" Name: Apple iPhone 5 \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 30000")
  } else if(selectedValue == "Apple" && secondSelectValue == "iphone6") {
    console.log(" Name: Apple iPhone 6 \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 30000")
  } else if(selectedValue == "Xiaomi" && secondSelectValue == "redminote10") {
    console.log(" Name: Xiaomi Redmi Note 10 \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 10000")
  } else if(selectedValue == "Xiaomi" && secondSelectValue == "redminote11") {
    console.log(" Name: Xiaomi Redmi Note 11 \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 10000")
  } else if(selectedValue == "Xiaomi" && secondSelectValue == "redmi10") {
    console.log(" Name: Xiaomi Redmi 10 \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 10000")
  } else if(selectedValue == "Xiaomi" && secondSelectValue == "redmi10pro") {
    console.log(" Name: Xiaomi Redmi 10 Pro \n RAM: 4GB \n ROM: 64GB \n Camera: 50px \n Price: 10000")
  }
}
getSelectValue();
