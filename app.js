                                    //Chapter-01
// Question-01:
alert("Welcome to my website")
// Question-02:
alert("Erro ! Please Enter the valid password")
// Question-03:
alert("Welcome to JS Land... \nHappy Coding!")
//Question-04:
alert("Welcome to JS Land...");
alert("Happy Coding!");
// Question-05:
alert("Hello...I can run JS through my web browser's console.")
// Question-06:

// Question-07:


                                        //Chapter-02: VARIABLES FOR STRINGS
//Question-01:
var username;
//Question-02:
var myName = "Baboo Kumar Heerani";
//Question-03:
//part-a;
var message;
//part-b:
message = "Hello World";
//part-c:
alert(message);
//Question-04:
var bioData = "Akash";
var age = "He is 21 year old";
var course = "He is certified application development";
alert(bioData);
alert(age);
alert(course);
//Question-05:
var name = "Pizza";
alert(name.slice(0,5)+"\n"+name.slice(0,4)+"\n"+name.slice(0,3)+"\n"+name.slice(0,2)+"\n"+name.slice(0,1))
//Question-06:
var email = "babooheerani999@gmail.com";
alert("My email address is "+email);
//Question-07:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);
//Question-08:
document.write("Yah! I can write HTML content through JavaScript")
//Question-09:
var show = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(show);
                           
                            //chapter-03
//Question-01
var age = 21;
alert("I am "+age+" years old");
//Question-02:
var visit = 30;
alert("You have visited my website" +visist+" times");
//Question-03:
var birthYear = 1999;
document.write("My birthday yeare is "+birthYear);
document.write("<br/> Date type of my declared varaible is "+typeof(birthYear));
//Question-04:
var visistor_name = "Reena";
var Product_title = "Makup";
var quantity = 5;
document.write("<b>"+visistor_name+"</b>"+" ordered " +"<b>"+ quantity + Product_title +"</b>"+" On daraz.pk")
                                 //chapter-04
//Question-01:
var a = 1,b = 2,c = 3;
//Question-02:
            // Legal:
            var country_name = Pakistan;
            var a1 = 21;
            var _country = India;
            var a = 2;
            var abc = 21;
            //Illegal:
            var country name = Pakistan;
            var 1a = 2;
            var 1show = 3;
            var 1235test = 21;
            var alert = 2;
//Question-03:
document.write("<h1>Rules for naming JS variable<h1>");
document.write("Variable names can only contain, numbers, and_.Forexample:$my_1stVariable");
document.write("Variables must begin with a letter ,$ or_.For example:$name,_name or name");
document.write("Variable names are case sensitive");
document.write("Variable names should not be JS keywords");
                                 //chapter-05:MATH EXPRESSIONS
//Question-01:
var a = +prompt("Enter first value:");
var b = +prompt("Enter second value:");
var sum = a+b;
document.write("Sum of " +a+ " and " +b+ " is " +sum)
//Question-02:
// Substraction:
var a = prompt("Enter first value:");
var b = prompt("Enter second value:");
var substract = a-b;
document.write("Substract of " +a+ " and " +b+ " is " +substract);
//Multiplication:
var a = prompt("Enter first value:");
var b = prompt("Enter second value:");
var Multiplication = a*b;
document.write("Multiplication of " +a+ " and " +b+ " is " +Multiplication);
//Division:
var a = prompt("Enter first value:");
var b = prompt("Enter second value:");
var division = a/b;
document.write("division of " +a+ " and " +b+ " is " +division);
//Modulus:
var a = prompt("Enter first value:");
var b = prompt("Enter second value:");
var modulus = a%b;
alert("modulus of " +a+ " and " +b+ " is " +modulus);
//Question-03:
//part-a:
 var a;
//part-b:
document.write("Value after variable declaration is "+a);
//part-c:
a = 5;
//part d:
document.write("Initial value: "+a);
//part e:
var b = ++a;
//part-f:
document.write("Value after increment is:"+b);
//part-g:
 var sum = b+7;
//part h:
document.write("Value after addition is:"+sum);
//part i:
var c = --sum;
//part j:
document.write("Value after decrement is:"+c);
//part k:
var remin = c%3;
//part l:
document.write("The reminder is :"+remin)
//Question-04:
var cost = 600;
//totall cost of buying 5 tickets  of movie will be 600*5 = 30k
var cost1 = 600*5;
document.write("Totall cost of buying 5 tickets to a movie is "+cost1+" PKR");
//Question-05:
document.write("4th Table")
document.write("4x1 = "+4*1);
document.write("4x2 = "+4*2);
document.write("4x3 = "+4*3);
document.write("4x4 = "+4*4);
document.write("4x5 = "+4*5);
document.write("4x6 = "+4*6);
document.write("4x7 = "+4*7);
document.write("4x8 = "+4*8);
document.write("4x9 = "+4*9);
document.write("4x10 = "+4*10);
//Question-06:
//part-a:
var cal_temp = 25;
//part-b:
var find = (cal_temp*9/5)+32;
document.write(cal_temp+"is: "+find+"F");
document.write("Temperature in Fahrenhit is: "+find);
//part-c:
var farh_temp = 70;
//part-d:
var find_Farh = (farh_temp-32)*5/9;
document.write(farh_temp+"F is "+find_Farh+"C")
//Question-07:
var Price_of_item1 = 650;
var Price_of_item2 = 100;
var Ordered_quantity_of_item1 = 3;
var Ordered_quantity_of_item2 = 7;
var Shipping_charges = 100;
document.write("<h1>"+"Shopping cart."+"</h1>")
var sum = (Price_of_item1*3)+(Price_of_item2*7)+Shipping_charges;
document.write("<br/>"+"Price of item 1 is "+Price_of_item1);
document.write("<br/>"+"Quantity of item 1 is "+Ordered_quantity_of_item1);
document.write("<br/>"+"Price of item 2 is "+Price_of_item2)
document.write("<br/>"+"Quantity of item 2 is "+Ordered_quantity_of_item2)
document.write("<br/<"+"Shipping Charges "+Shipping_charges);
document.write("<br/>"+"<br/>"+"Total cost of your order is:"+sum)
//Question-08:
var totall = 908;
var obtain = 804;
var percentage = (obtain*100)/totall;
document.write("<h1>"+"Marks sheet"+"</h1>");
document.write("<br/>"+"Totall Marks:"+totall);
document.write("<br/>"+"Marks obtained:"+obtain);
document.write("<br/>"+"Percentage:"+percentage+"%");
//Question-09:
var USA = 10;
var USA_to_pk =  104.80*USA;
var Saudi = 25;
var Saudi_to_pk =  28*Saudi;
var sum = (USA_to_pk+Saudi_to_pk);
document.write("<h1>"+"Curreny in pkr"+"</h1>")
document.write("Total curreny in PKR: "+sum)
//Question-10:
var a = 2;
var b = a+5;
var c = b*10;
var d = c/2;
document.write(d);
//Question-11:
var current_year = 2021;
var birth_year = 1999;
var age = current_year-birth_year;
document.write("<h1>"+"Age Calculator"+"</h1>")
document.write("Current Year: "+current_year);
document.write("Birth Year: "+birth_year);
document.write("Your Age is: "+age)
//Question-12:
var radious = 2;
var PI = 3.142;
var circumstance = 2*PI*radious;
var area = PI*radious*radious;
document.write("Radious of circle: "+radious);
document.write("The Circumstance is: "+circumstance);
document.write("The area is: "+area);
//Question-13:
var a = "Potato Chips";
var my_Age = 22;
var max_Age = 100;
var amount = 2;
var calculate = (max_Age-my_Age)*2;
document.write("<h1>"+"The Life Time Supply Calculator"+"</h1>")
document.write("Favorite Snack:"+a);
document.write("<br/>"+"Current age:"+my_Age);
document.write("<br/>"+"Estimated Maximum Age:"+max_Age);
document.write("<br/>"+"Amount of snakcks per day:"+amount);
document.write("<br/>"+"You will need "+calculate+" potato chip to last you until the age of 100");
                                //Chapter6-9: MATH EXPRESSIONS
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser
// Solution:
var a = prompt("Enter any value you want: ");
document.write("<br/>"+"Result:");
document.write("<br/>"+"The value of a is: "+a);
document.write("<br/>"+"<br/>"+"......................................................................")
// var b = ++a;
document.write("<br/>"+"<br/>"+"<br/>"+"The Value of ++a is: "+(++a));
document.write("<br/>"+"Now the value of a is: "+a);
// var c = b++;
document.write("<br/>"+"<br/>"+"Value of a++ is: "+(a++));
document.write("<br/>"+"Now the value of a is: "+a);

document.write("<br/>"+"<br/>"+"Value of --a is: "+(--a));
document.write("<br/>"+"Now the value of a is: "+a);


document.write("<br/>"+"<br/>"+"Value of a-- is: "+(a--));
document.write("<br/>"+"Now the value of a is: "+a);

// Question 02:
var a = 2;
var b = 1;
document.write("a is "+a);
document.write("<br/>"+"b is "+b);
var result = --a - --b + ++b + b--;
document.write("<br/>"+"result is "+result+"<br/>");
document.write(--a+"<br/>");
document.write(--a - --b+"<br/>");
document.write(--a - --b + ++b+"<br/>");
document.write(--a - --b + ++b + b--+"<br/>");

// Question 03:
var name = prompt("Enter your friend name:");
document.write("Hello! Dear "+name+" Most welcome to my Home");

//Question-04:
var s = prompt("Enter any number for multiplication table:");
console.log("## The Table of "+s+" ######");
var a = 1;
console.log(a+" x "+s+" = "+(a*s));
var b = ++a;
console.log(b+" x "+s+" = "+(b*s));
var c = ++b;
console.log(c+" x "+s+" = "+(c*s));
var d = ++c;
console.log(d+" x "+s+" = "+(d*s));
var e = ++d;
console.log(e+" x "+s+" = "+(e*s));
var g = ++e;
console.log(g+" x "+s+" = "+(g*s));
var h = ++g;
console.log(h+" x "+s+" = "+(h*s));
var i = ++h;
console.log(i+" x "+s+" = "+(i*s));
var j = ++i;
console.log(j+" x "+s+" = "+(j*s));
var k = ++j;
console.log(k+" x "+s+" = "+(k*s));
var s = 5;
console.log("## The Table of "+s+" ########");
var a = 1;
console.log(a+" x "+s+" = "+(a*s));
var b = ++a;
console.log(b+" x "+s+" = "+(b*s));
var c = ++b;
console.log(c+" x "+s+" = "+(c*s));
var d = ++c;
console.log(d+" x "+s+" = "+(d*s));
var e = ++d;
console.log(e+" x "+s+" = "+(e*s));
var g = ++e;
console.log(g+" x "+s+" = "+(g*s));
var h = ++g;
console.log(h+" x "+s+" = "+(h*s));
var i = ++h;
console.log(i+" x "+s+" = "+(i*s));
var j = ++i;
console.log(j+" x "+s+" = "+(j*s));
var k = ++j;
console.log();(k+" x "+s+" = "+(k*s));

//Question-05:
var s1 = prompt("Enter subject 1:");
var s2 = prompt("Enter subject 2:");
var s3 = prompt("Enter subject 3:");
var totallMarks = 100;
var submark1 = promt("Enter subject 1 obtained marks:") 
var submark2 = promt("Enter subject 2 obtained marks:") 
var submark3 = promt("Enter subject 3 obtained marks:") 



                                                //Chapter 09-11: USER INPUT & CONDITIONAL STATEMENT
//Question-01:
var city = prompt("Enter city:");
if(city==="Karachi")
{
    document.write("Welcome to city of lights");
}
//Question-02:
 var gender = prompt("Enter gender")
 if(gender==="male")
 {
     console.log("Good Morning sir");
 }
 if(gender==="female")
 {
     console.log("Good Morning Ma'am");
 }
//Question-03:
var color = prompt("Enter traffic signal color:");
if(color==="red")
{
    console.log("Must Stop");
}
if(color==="green")
{
    console.log("Move now");
}
if(color=="yellow")
{
    console.log("Ready to move");
}
//Question-04:
var fuel = prompt("Enter remaining fuel in car:");
if(fuel<0.25)
{
    console.log("Please refill the fuel in your car..");
}
//Question-05:
//a 
var a = 4;
if (++a === 5)
{
    alert("given condition for variable a is true");
}
//b
var b = 82;
if (b++ === 83)
{
    alert("given condition for variable b is true");
}
//c. 
var c = 12;
if (c++ === 13)
{
    alert("condition 1 is true");
}
if (c === 13)
{
    alert("condition 2 is true");
}
if (++c < 14)
{
    alert("condition 3 is true");
}
if(c === 14)
{
    alert("condition 4 is true");
}
//d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{
    alert("The cost equals");
}
//e
if (true)
{
    alert("True");
}
if (false)
{
    alert("False");
}
if("car" < "cat")
{
    alert("car is smaller than cat");
}
//Question-06:
 table
//Question-07:
    var secret_number = 1;
    var guess_number = prompt("Enter any number from (1 to 10)");
    if(secret_number==guess_number)
    {
        console.log("Bingo! Correct answer");
    }
    if(guess_number+1== secret_number)
    {
        console.log("Close enough to the correct answer");
    }
//Question-08:
var check = prompt("Enter any value")
if(check/3==0)
{
    console.log("This number is divisible by 3");
}
//Question-09:
var number = prompt("Enter number")
if(number/2==0)
{
    console.log("This number is even");
}
if(number/3==0)
{
    console.log("This number is odd");
}
//Question-10:
 var temp = prompt("Enter temperature")
 if(temp>40)
 {
     console.log("it is too hot outside");
 }
 if(temp>30)
 {
     console.log("The weather today is Normal");
 }
 if(temp>20)
 {
     console.log("Today's Weather is cool.");
 }
 if(temp>10)
 {
     console.log("OMG! Today's weather is so Cool.");
 }
//Question-11:

var first_number = +prompt("Enter first number:");
var second_number = +prompt("Enter second number:");
var operation = prompt("Enter Operation(+,-,*,/");
if(operation==='+')
{
    var sum = first_number+second_number;
    console.log("Sum: "+sum);
}
if(operation==='-')
{
    var Minus = first_number-second_number;
    console.log("Substraction: "+Minus);
}
if(operation==='*')
{
    var Multiply = first_number*second_number;
    console.log("Multiplication: "+Multiply);
}
if(operation==='/')
{
    var division = first_number/second_number;
    console.log("Division: "+division);
}


                                        //Chapter12-13: IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
//Question-01:
var b = prompt("Enter Data ")
// console.log(b.charCodeAt(0))
if(b.length == 1)
{
 var c = b.charCodeAt(0)
//  console.log(c)
 if(c>=65 && c<=90)
 {
     console.log("Capital letter")
 }
 else if(c>=97 && c<=121)
 {
    console.log("SMALL letter")
 }
 else if(c>=49 && c<=57)
 {
     console.log("Number");
 }

//  65,90 ==capital
//  97,121 == small 
//  49,57 == Number
//  0,37 ==specail 
}
else
{
    console.log("Longer Data");
}
//Question-02:
var a = prompt("Enter first number:");
var b = prompt("Enter second number:");
if(a>b)
{
    console.log("first number is greater than second ");
}
else if(b>a)
{
    console.log("Second number is greater than first");
}
else
{
    console.log("Both are equal");
}
//Question-03:
var number = prompt("Enter number:")
if(Math.sign(number)==1)
{
    console.log("Number is positive");
}
else if (Math.sign(number)==-1)
{
    console.log("Number is Negative");
}
else if(Math.sign(number)==1)
{
    console.log("Number is Zero");
}
//Question-04:
var char = prompt("Enter character:");
if(char=='A'|| char=='E'|| char=='I'|| char=='U'|| char=='U')
{
    console.log("it is Vowel");
}
else
{
    console.log("It is consonant");
}
//Question-05:
var password = "1234";
if()
{
    console.log("Please enter your password");
}
if(password==="1234")
{
    console.log("Correct! The password you entered matches the original password");
}
else
{
    console.log("Incorrect password");
}
//Question-06:
var hour = 13;
if (hour < 18) 
{
    console.log("Good day"); 
}
else
{
    console.log("Good evening");
}
//Question-07:
 
var time = prompt("Enter time:");
if(time=='1')
{
    console.log("It is 1'O clock");
}
else if(time=='2')
{
    console.log("It is 2'O clock");
}
else if(time=='3')
{
    console.log("It is 3'O clock");
}
else if(time=='4')
{
    console.log("It is 4'O clock");
}
else if(time=='5')
{
    console.log("It is 5'O clock");
}
else if(time=='6')
{
    console.log("It is 6'O clock");
}
else if(time=='7')
{
    console.log("It is 7'O clock");
}
else if(time=='8')
{
    console.log("It is 8'O clock");
}
else if(time=='9')
{
    console.log("It is 9'O clock");
}
else if(time=='10')
{
    console.log("It is 10'O clock");
}
else if(time=='11')
{
    console.log("It is 11'O clock");
}
else if(time=='12')
{
    console.log("It is 12'O clock");
}
else if(time=='13')
{
    console.log("It is 1'O clock");
}
else if(time=='14')
{
    console.log("It is 2'O clock");
}
else if(time=='15')
{
    console.log("It is 3'O clock");
}
else if(time=='16')
{
    console.log("It is 4'O clock");
}
else if(time=='17')
{
    console.log("It is 5'O clock");
}
else if(time=='18')
{
    console.log("It is 6'O clock");
}
else if(time=='19')
{
    console.log("It is 7'O clock");
}
else if(time=='20')
{
    console.log("It is 8'O clock");
}
else if(time=='21')
{
    console.log("It is 9'O clock");
}
else if(time=='22')
{
    console.log("It is 10'O clock");
}
else if(time=='23')
{
    console.log("It is 11'O clock");
}
else if(time=='24')
{
    console.log("It is 12'O clock");
}
                                                //Chapter 14-16:
//Question-01:
var student = [];
//Question-02:
//Question-03:
var cars = ["Saab", "Volvo", "BMW"];
//Question-04:
var cars = [1,2,3,4,5,6,7,8,9,10];
//Question-05:
var boolArray = [true,false];
//Question-06:
var mixArray = ["Baboo",1,2,true,false];
//Question-07:
var Qualification = ["SSC", "HSC", "BSC","BS","BCOM","MS","M.Phil.","PhD"];
console.log("Qualification");
console.log(Qualification[0]);
console.log(Qualification[1]);
console.log(Qualification[2]);
console.log(Qualification[3]);
console.log(Qualification[4]);
console.log(Qualification[5]);
console.log(Qualification[6]);
console.log(Qualification[7]);
//Question-08:
var myArray = ["Suhail","Baboo","Rajesh"];
var my_Array = [200,300,400];
console.log("Score of "+myArray[0]+" is"+my_Array+".Percentage:"+my_Array[0]/500*200);
console.log("Score of "+myArray[1]+" is"+my_Array+".Percentage:"+my_Array[1]/500*200);
console.log("Score of "+myArray[2]+" is"+my_Array+".Percentage:"+my_Array[2]/500*200);

//Question-09:
var color_Name = ["Red","Green","Blue","Yellow","Orange","Pink","Purple"]
//part-a:
var color_Choice = prompt("what color do you wants to add in the begning");
color_Name.unshift(color_Choice);
console.log(color_Name);
//part-b:
var color_Choice = prompt("what color do you wants to add at the end");
color_Name.push(color_Choice);
console.log(color_Name);
//part-c:
var color_name1 = ["red"];
color_name1.unshift("Green","Blue");
console.log(color_name1); 
//part-d:
color_name1.shift();
console.log(color_name1);
//part-e:
color_name1.pop();
console.log(color_name1);
//part-f:
var colors = ["red","green"];
var choice_colorIndex = prompt("Enter the color index where you want to insert color:");
var choice_colorName = prompt("Enter the color name:");
colors.splice(choice_colorIndex,0,choice_colorName);
console.log(colors);
// g:
var colors = ["red","green","pink"];
var choice_colorIndex = prompt("Enter the color index where you want to delete the color ");
var choice_colorNumber = prompt("How many color do you want to remove ");
colors.splice(choice_colorIndex,choice_colorNumber);
console.log(colors);
//Question-10:
var score = [320,230,480,120];
console.log("Scores of Students:"+score[0],score[1],score[2],score[3]);
score.sort();
console.log("Ordered scores of students: "+score);
//Question-11:
var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
console.log("Cities list:");
console.log(city[0],city[1],city[2],city[3],city[4],);
console.log("Selected Cities list:");
var a = city.slice(2,3);
console.log(a[0]);
console.log(a[1]);
//Question-12:

//Question-13:

//Question 14:
var arr = ["This ", " is ", " my ", " cat"];
document.write("Array:"+)
var main = arr.join('')
document.write("String:"+"<br />"+main)

//Question 15: 
var arr = ["Apple","Samsung","Nokia","Matorala","Sony","Haier"]
document.write("<select>")
for(var i =0;i<arr.length;i++)
{
  
    document.write("<option>"+arr[i]+"</option>")
}
document.write("</select>")




                        //Exerciese-01:
//Question-01:
var first_Name = "Baboo";
var last_Name = "Kumar";
var country = "Pakistani";
var city = "Hyderabad";
var age = 21; 
var isMarried = "Yes";
var year = 2021;
console.log(typeof(first_Name));
console.log(typeof(last_Name));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));
//Question-02:
var a = '10';
if(a==10)
{
    console.log("True");
}
//Question-03:
var a = '10';
if(a==='10')
{
    console.log("True");
}
//Question-04:
//part-01:
console.log(Boolean(10 > 9));
console.log(Boolean(9 > 8));
console.log(Boolean(8 > 7));
//part-02:
console.log(Boolean(10 < 9));
console.log(Boolean(80 < 19));
console.log(Boolean(100 < 91));
//Question-05:
//part-I:
console.log(4>3)
//part-II:
console.log(4 >= 3)
//part-III:
console.log(4 < 3)
//part-IV:
console.log(4 <= 3)
//part-V:
console.log(4 == 4)
//part-VI:
console.log(4 === 4)
//part-VII:
console.log(4 != 4)
//part-VIII:
console.log(4 !== 4)
//part-IX:
console.log(4 != '4')
//part-X:
console.log(4 == '4')

//Question-06:
var base = prompt("Enter base value:");
var height = prompt("Enter height value:");
var area = (0.5*base+height);
console.log("Area of traingle is: "+area);
//Question-07:
var a= prompt("Enter first value:");
var b = prompt("Enter second value:");
var c = prompt("Enter third value:");
var perimeter = (a+b+c);
console.log("Parameter of of traiangle is: "+perimeter);
//Question-08:
var hour = prompt("Ente hour");
var rats_per_hour = prompt("Enter rat's per hour:");

//Exercise 3:
//Question-01:
var age = prompt("Enter your age:");
var wait = 18-age;
if(age>=18)
{
    console.log("You are old enough to drive");
}
else
{
    console.log("You are left with " +wait+" years to drive.");
}
//Question-02:
var check = prompt("Enter number:");
if(check/2==0)
{
    console.log(check+" is an even number");
}
else
{
    console.log(check+" is an odd number");
}
/*
 3. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
 let myAge = 250 
 let yourAge = 25
 I am 225 years older than you. 
 */
var myAge = prompt("Enter My age:");
var yourAge = prompt("Enter your age:");
if(myAge>yourAge)
{
    var substract = myAge-yourAge;
    console.log("I am "+substract+" year older than you");
}
else if(yourAge>myAge)
{
    var diff = yourAge-myAge;
    console.log("You are "+diff+" years older than me");
}
//1. Write a single line comment which says, comments can make code readable
//console.log("comments can make code readable");
//2. Create a variable.js file and declare variables and assign string,boolean, undefined and null data types.variable.js
{
    var name = "Akash";
    var x;
    var x = null;
    Boolean(x);       // returns false
}
/*3. Declare four variables without assigning values */
var a;
var b;
var c;
var d;
/*4. Declare four variables with assigning values*/
var a = 1;
var b = 2;
var c = 3;
var d = 4;
/*5. Declare variables to store your first name, last name, marital status, country and age in multiple lines */
var first_Name = "Baboo";
var lastName = "Heerani";
var marital_status = "Single";
var country = "Pakistani";
var age =22;
/*6. Declare variables to store your first name, last name, marital status, country and age in a single line */
var first_Name = "Baboo",lastName = "Heerani",marital_status = "Single",country = "Pakistani",age =22;
/*7. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
I am 25 years old.
You are 30 years old.*/
var myAge = prompt("Enter my age:");
var yourAge = prompt("Enter your age:");
console.log("Iam "+myAge+" years old.");
console.log("You are "+yourAge+" years old.");