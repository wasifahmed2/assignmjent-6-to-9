//CHAPTER 6 TO 9

// Q:1 
// Declare the initial variable
var a = 10;

// Display the original value
document.write("<h3>Result:</h3>");
document.write("The value of a is: " + a + "<br><br>");

// Pre-increment operation (++a)
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment operation (a++)
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement operation (--a)
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement operation (a--)
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>"); // ANS 1

/* Q2: What will be the output in variables a, b & result after
execution of the following script:
  var a = 2, b = 1;
  var result = --a - --b + ++b + b--;
  Explain the output at each stage:
  --a;
  --a - --b;
  --a - --b + ++b;
  --a - --b + ++b + b--;  */ 

var a = 2, b = 1;


var result = --a - --b + ++b + b--;


document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("Final result is: " + result); // ANS 2



// Q3: Write a program that takes input a name from user & greet the user.
// Prompt the user to enter their name.
var userName = prompt("Please enter your name:");

document.write("Hello, " + userName + "! Welcome to our website.");// ANS 3



// Q4: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.


var number = prompt("Enter a number for the multiplication table (default is 5):");


if (number === null || number === "") {
    number = 5;
} else {
    number = parseInt(number); 
}


document.write("<h3>Multiplication Table of " + number + ":</h3>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>"); // ANS 4

/* Q:5 Take
  a) Take three subjects name from user and store them in 3
  different variables.
  b) Total marks for each subject is 100, store it in another
  variable.
  c) Take obtained marks for first subject from user and
  stored it in different variable.
  d) Take obtained marks for remaining 2 subjects from user
  and store them in variables.
  e) Now calculate total marks and percentage and show the
  result in browser like this.(Hint: user table)  */


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");


var totalMarks = 100;


var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));


var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));


var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;


document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (3 * totalMarks) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>"); // ANS 5