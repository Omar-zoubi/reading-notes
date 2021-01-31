var name = prompt("Enter yor name ","name")
alert("Welcome to my Website "+name)
var x = confirm("Do you want to vist us again ")

var pasword = "0000"
var uinput 
while (uinput !=pasword) {
    uinput=prompt("Enter the password ")
    
}
 
var rate  = prompt("Enter yor rate ","1 star ,tow star ,three star four star  ")


function rateImage ()
    {
        for(var i =0 ;i <rate ;i++)
            {
             console.log(rate)
             console.log(i<rate)  
             var star =  '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1200px-Golden_star.svg.png">'
             console.log(star)
             document.write(star)
             }
     }
     rateImage();


var image = '<img width= "100" height= "100" src="https://wholefully.com/wp-content/uploads/2019/04/no-banana-smoothies_972x1272_acf_cropped-735x962.jpg" > '

console.log(image) 