## part 1

#### Triggered breakpoint
![Image of Triggered breakpoint]()


#### Add watch expressions
![Image of watch expressions]()


* What was the bug?
    There is a type conversion bug appearing when getting the input value. The variables num1 and num2 are treating the input values as string. When the program passes these values into `calculateSum()`, the function will perform string concatenation and store it as result for return. 

* How would you fix it? Include a screenshot of your fix.

    This bug can be fixed by multiplying 1 on each input at line 2 and line 3 before it get passed to `calculateSum()`. 
    ```
    let num1 = document.getElementById("num1").value * 1;
    let num2 = document.getElementById("num2").value * 1;
    ```
    Multiplying 1 can ensure the input value will be treated as number.

![Image of Fixed]()







## part 2

Once it finishes downloading, answer the following questions:
  1. What is the name of the new json file?

    `citylots`

  2. Which file initiated the download of the new file?

    `part2.js`

  3. What is its file size?

    `11.7MB` for citylots.json

    `53B` for part2.js

  4. How long did it take to download?

    `74ms`

Next, select that file to bring up a new side panel to answer the following:

  5. What was your User-Agent for the browser that made the request?

    `User-Agent: Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36`

  6. In the response, what type of server did it come from?

    `Server: Apache`

  7. When was the file last modified?

    `Last-Modified: Tue, 26 Jan 2021 22:14:13 GMT`

  8. What was the Content-Type of the file?

    `Content-Type: application/json`

Navigate to the Initia  tor tab now and answer the last question

  9. Which method inside the initiating file made the request?

    `fetchData`