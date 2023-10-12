# Javascript advanced

## 0. Lexical scoping and welcome message
Create a function named ```welcome```:
* It takes two arguments: ```firstName``` (string) and ```lastName``` (string)
* It contains a variable named ```fullName```, that will contains the ```firstName``` followed by a space and then the ```lastName```
* Within the ```welcome``` function, write a function named ```displayFullName```:
    * It should display an alert with the message ```Welcome``` followed by a space, then the variable ```fullName``` followed by an exclamation mark.
* Call the function ```displayFullName``` at the end of the function ```welcome```

## 1. Closure Scope Chain
* Create a variable named globalVariable with value Welcome
* Create a function outer that:
    * alerts the content of the variable globalVariable
    * creates a variable named course with value Holberton
    * creates a function inner that:
        * alerts the content of the variable globalVariable and course (concatenated)
        * creates a variable named exclamation with value !
        * creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
        * calls the function inception
    * calls the function inner
* Call the function outer

## 2. Closure
Write a function named ```welcomeMessage```:

* It accepts one argument ```fullName``` (string)
* It should be a closure for an alert displaying ```Welcome <fullName>```
After this function definition, create three variables:

* ```guillaume``` contains a call ```welcomeMessage``` with ```Guillaume``` as argument
* ```alex``` contains a call ```welcomeMessage``` with ```Alex``` as argument
* ```fred``` contains a call ```welcomeMessage``` with ```Fred``` as argument

## 3. Closure and loops
Write a function named ```createClassRoom```:
* It takes into argument ```numbersOfStudents``` (number)
* Inside, it contains a function ```studentSeat```, that takes into argument ```seat``` (number) and returns a function that returns the ```seat``` number
* After the definition of ```studentSeat```, create and populate a variable ```students``` (array)
    * Using a loop from 0 to ```numbersOfStudents```, pass the number of iteration + 1 to ```studentSeat``` and add its return value to the ```students``` array
* Returns the ```students``` array
Create a closure ```classRoom```, calling ```createClassRoom``` with 10 students
