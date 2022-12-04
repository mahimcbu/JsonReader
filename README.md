# JsonReader

Hi Josh, This week I created a JSON file which has array of objects containing my attended college names, program, degree type, gpa, and year as property:value format.
I then used javascript to add a button to the html page. I created the required table heads at first.
I then added an eventlistner on that button to listen for click and then call two functions.
One of the function fetches the json.json file in the same directory and uses "then()" to parse. After that another "then()" we acquired the data from the json.
Used a for loop to iterate over the results and add the elements in the table body.
Another function is used to check for promise and cathc errors if any.
I also validated the json script. 
