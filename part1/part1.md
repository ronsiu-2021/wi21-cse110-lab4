1. What will happen at line 11 and why?
    Line 11 will output the value stored in `i`. `i` is a var variable. It controls the number of times of the loop being run. var i was declared at line 5, and it is accessible outside of the loop at line 11 because var varialbes have no block scope.   

2. What will happen at line 12 and why?
    Line 12 will output the value stored in discountedPrice. The variable discountedPrice is var variable, and it was declared at line 6 inside the for loop. The var variable can be accessible outside the scope and allow redeclarations. So, the var discountedPrice is accessible at line 12.

3. What will happen at line 13 and why?
   Line 13 will output the value stored in finalPrice. finalPrice is a var variable, which is declared at line 3 with value 0. Since var variable can be accessible outside the scope and assignment always works at the place where it appears, the value of finalPrice is updated at line 7. Then, finalPrice is still accessible line 13 and output its value.

4. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation.
   it will output

   3

   150

   150

   and return [50, 100, 150]
   
   Since the variable i, discountedPrice, finalPrice, are all var variables. They all have global visibility and no block scope. It also allow assignment after the declaration. i has value of 3, which is used to indicate the elements of the input array that we are iterating, and 3 is the array's length.

5. What will happen at line 11 and why?

    On line 11, there is an Reference error because i is not defined. The variable i is a let variable and declared at line 5. Since let variable is a block-local variable and let i is declared at the same line with the for loop, which will be considered inside the for loop, variable i  is not accessible from line 11.


6. What will happen at line 12 and why?

     On line 12, there is an Reference error because discountedPrice is not defined. The variable discountedPrice is a let variable and declared at line 6. Since let variable is a block-local variable and let discountedPrice is declared inside the for loop, the variable discountedPrice is not accessible from line 12.

7. What will happen at line 13 and why?

    On line 13, it will output the value of finalPrice. The variable finalPrice is a let variable and declared at line 3. The code on line 3 and line 13 are within the same scope, which means there is no reference error or undeclaration of finalPrice. The error could still occur because of the error from the previous lines of code, but in general, the variable finalPrice can be accessible from line 13. 

8. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.

    The function will return [ 50, 100, 150 ]. If the line 11-13 does not cause any error, the code will be executed without any error. Since discounted and finalPrice are let variables declared at line 2 and 3, these variables are living in the outest scope of this function and are accessible from the inner scope. Even though variables i and discountedPrice are let variables and declared within the for looop scope, these variable are used to calculate and update finalPrice, which is accessible from the for loop. At the end the variable discounted will contains the value of finalPrice that is being calculated in each iteration. The function will return the values that are stored in the let variable discounted. 

9. What will happen at line 11 and why?

    On line 11, there is an Reference error because i is not defined. The variable i is a let variable and declared at line 5. Since let variable is a block-local variable and let i is declared at the same line with the for loop, it will be considered inside the for loop and only accessible within the scope. Thus, the variable i is not accessible from the outter scope on line 11.    

10. What will happen at line 12 and why?

    On line 12, there is an Reference error because discountedPrice is not defined. The variable discountedPrice is a const variable and declared at line 6. The const variable is a block-local variable like let variable. The value of a const variable cannot be changed through reassignment, and it can't be redeclared. Since the const discountedPrice declare inside the for loop and only accessible within this block of scope. Thus, the variable discountedPrice is not access accessible from line 12. 

11. What will happen at line 13 and why?

    On line 13, it will print out the value of finalPrice if we assume the later assignment was successful. The variable finalPrice is a const variable and declare at line 3, which is a  block-local variable. It is accessible from the line 13 because these line of code are under the same scope. If we take reassignement in to account, there is an error occur at line 7 because const variable cannot be changed through reassignment and be redeclared.

12. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    
    The function will return [0, 0, 0]. If we ignore the error of reassignment at line 7, the code will process and add the value of finalPrice into discount[]. The const array discounted and const variable finalPrice are declared at line 2 and 3. They are accessible under the scope. Element is added to discounted at line 8; discounted and finalPrice are accessible within the for loop, which is a inner scope. This also means the elements of a constant array is changable. Since the value of a const variable is unchangable, the code will add the constant value 0 stored in finalPrice into discounted. At the end, the function will return an array that containing [0, 0, 0].

13. Given the above Object, write the notation for:  (These should be in your part1.md)

    A. Accessing the value of the name property in the student object

    `student.name`

    B. Accessing the value of the Grad Year property in the student object
    
    `student['Grad Year']`

    C. Calling the function for the greeting property in the student object
    
    `student.greeting();`

    D. Accessing the name property of the object in the Favorite Teacher property in student
    
    `student['Favorite Teacher'].name`

    E. Access the first index in the array of the courseLoad property of the student object

    `student.courseLoad[0]`

14. Arithmetic
    A. '3' + 2

    `32`, string conversion on 2, then it will concatenate to 3 to become 32 as string.

    B. '3' - 2

    `1`, numeric conversion of '3'. The '3' is becomes numeric 3 and perform the math operation. The result will be a numeric value of 1.

    C. 3 + null

    `3`, numeric conversion on null which makes it become numeric value of 0 and perform math operations. The result will be numeric value of 3.

    D. '3' + null

    `3null`, string conversion on null. The null will become "null" and concatenate to '3' to be the string "3null"

    E. true + 3

    `4`, numeric conversion on true and evaluate as value of 1, then perform math operation. The result will be numeric value of 4. 

    F. false + null

    `0`, numeric conversion on false and null. They will be evaluated to number 0, and the result will be numeric value of 0. 

    G. “3” + undefined

    `3undefined`, string conersion on undefinded. The undefined will be converted to string and concatenate to "3"

    H. “3” - undefined

    `NaN`, there will be numeric conversion on "3" and undefined. Since undefined will be evaluated as NaN, the result will become Nan.

15. Comparison

    A. '2'> 1

    `true`, the '2' will be converted to a number during the comparison. 2 is greater than 1, this returns true.

    B. '2' < '12'

    `false`, when comparing two strings, "2" will be greater than "12", because 1, in the "12", is alphabetically smaller than 2.

    C. 2 == '2'

    `true`, the '2' will be converted to numbers, and 2 is equal to 2.

    D. 2 === '2'

    `false`, A strict equality operator === checks the equality without type conversion. This will return false because the types are different.

    E. true == 2

    `false`, the true, which is a boolean value, will be converted into numbers and evaluated as numeric value of 1. Then, comparing the equlity of 1 and 2, it will return false because 1 is not equal to 2.

    F. true === Boolean(2)

    `true`, The Boolean() function returns the boolean value of variable. The variables that other than ‘0’, ‘NaN’, empty string, ‘undefined’, ‘null’ will be treated as true. The === means strictly compare the variables without conversion. Since true is equal to true and both are type of boolean, the result will be true.

16. Explain the difference between the == and === operators.

    The == will implicit conversion to compare the operands, and the strict equality operator === checks the equality without type conversion.


17. From the code snippet below, explain what gets printed and why. 

    `How are you?` 
    The first `if` statement will convert true to become number and evaluated as 1, which is false. Then the code will process the next line, and evaluate the else if statement. Since any numeric value other than `0` will be evaluated as true in the if-else statment, the first else if will be evaluated as true. It will print "How are you?". 

18. Given the below Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with an R, or if the value of that property is an odd number

    Answer in `part1-question18.js`

19. If the function below is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. 
    
    `[ 6, 8, 10 ]` will be the result.
    In JavaScript, functions are objects; we can pass functions as parameter into another function which is known as callback function. The `modifyArray(array, function)`, which an array and function as input parameters, will declare an array and enter the for loop to iterate over the input array. For every element in the array, it will first call the input function as `doSomething()`. After the code inside `doSomething()` has been done, it will go back into `modifyArray()` and execute next parameter in the `callback()`the other function on the same line. The element is `1`, then it will first enter `doSomething()` at `callback()`, then from `doSomething()` we have a return value as `3` which will be used as input for the later function which will multiply `3` by `2`. After all the functions inside `callback()` has been done, it will push the value of `6` into `newArr`. After all the iterations has been done, the result of the return array will be `[ 6, 8, 10 ]`.

20. This program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part1-question20.js)

    Answer in `part1-question20.js`

21. What is the output of this code? (This should be in your part1.md)
    
    1
    
    4
    
    3
    
    2

    The code will first proceed as the line of code without `setTimeout()` first, and it will print 1 then 4. Since 3 has setTimeout with 0 second, it will print 3 next. Then it will wait 1 second to print 4 to the console. 