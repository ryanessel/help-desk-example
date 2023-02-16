
Hello, thank you for taking the time to look at my quickly made help desk system

Please take a look at the screen shots be low to see how the website works.



1. Main Page and Customer Submit Form
![ticktub](./readmepics/Ticket%20Submit%20Form.png "Ticket Submit Form")
- The customer can submit their issuse on this page; succesful submissions return a succes message
pic here
- if any of the boxes are empty you are prompted to fill out all the fields
pic here



2. Logging in and route protection
![going to log in](./readmepics/Going%20to%20log%20in.png "Going to log in")
- When you log in the ticket list link appears

![after login](./readmepics/after%20login.png "after login")

3. Ticket List Page
![ticket list](./readmepics/Ticket%20List%20View%20.png "ticket list")
- You can change the status using the dropdown menu on each line
- It updates the database the instant a different selection is made
- Also have colors to correspond to urgency. 
- clicking the details page will let you send that specific user an email about their ticket

4. Send Email page
![send email](./readmepics/send%20response%20page.png "sending email")
- If you don't put anything in the response to ticket text area you get an error
![error](./readmepics/error%20send%20response.png "email error")
- When you send a message succesfully you get the response like in the picutre below
![success](./readmepics/sucess%20send%20message.png "email success")
- Message with email and user's name is sent to browser console.
![response check](./readmepics/sucess%20send%20message.png "response check")


5. All admin routes are protected and kick you back to the front page with the ticket submission form
   -Ticket Lists page
   -Ticket details/email response page

6. Addiing a new admin use is done by knowing the route extension to type into the browser
- in this case you just add AdminAddSecretURL to http://localhost:3000/AdminAddSecretURL like so and it will take you to the sign up page






