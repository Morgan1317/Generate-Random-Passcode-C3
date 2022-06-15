# Generate-Random-Passcode-C3

### Generate a Random Password ###

**PURPOSE**

Take a starter code and make it so that when the button 'generate password' is clicked, a random password is generated with constraints that the user input, such as length, and what types of characters are utilized. 

***Summary***

I first made functions that would work to determine the length of the password based on user input. 

<img width="1344" alt="Screen Capture of Generate Random Password Functions" src="https://user-images.githubusercontent.com/103079401/173921955-4e64e8ce-72c4-4814-926e-39dceada60e7.png">

I continued to make functions that would work to randomize whatever characters the user chooses to implement in the password. 

<img width="1344" alt="password function screencapture" src="https://user-images.githubusercontent.com/103079401/173922490-e1c060c0-b009-45c5-ad73-f61933429f15.png">

In the function, it works by prompting the user for the length and characters wanted in the password. An array is initialized for the password, and a while loop runs until the length of the password it met. If the user wants to use a specific type of character, if statements work to implement that function specified for the type of character, and push them into the array. Once the length is met, the while loop stops, and the array of random characters is shuffled again utilizing the fisher yates method of shuffle. This randomized order of the array is output into a string, and the function stops by returning this string. 

<img width="1344" alt="screen capture write password function" src="https://user-images.githubusercontent.com/103079401/173923368-167b0d45-19cb-429a-80b8-ea50cc086d79.png">

This string is then used in the given function writePassword, and upon clicking the generate password button is displayed in the box on the screen for the user to utilize. 

***SCREEN CAPTURE OF WEBPAGE*** 

The image below shows the working interface if the user chose 34 characters, and all character types. 

<img width="1726" alt="Screencapture working code interface" src="https://user-images.githubusercontent.com/103079401/173923987-0fd208b0-ae4f-4724-9400-0951d433478c.png">


***LINK TO DEPLOYED APPLICATION***

https://morgan1317.github.io/Generate-Random-Passcode-C3/
