### <span style="color:dodgerblue;">**Feature:**</span> User authentication by a Google Account  
Currently is very common in modern applications to authenticate using an account offered  
by some known company like Google, Microsoft and Linkedin. The reason for that is security and convenience.  
Using a Google Account for example, a user can access some other application using the same credentials without share  
your sensitive data with this applications. This way the user can centralize the sensitive data in one place and use  
then in some other services. The technology responsible for that is OAuth2 that is a industry-standard protocol.

><span style="color:orangered;">**User Story:**</span>  
As a user, I want to log in using a Google Account so I can keep my personal information
secure and I can also manage my access in one place.

<span style="color:orangered;">**Impact:**</span> [https://impact.com](https://)  

<span style="color:orangered;">**Screen Mockups:**</span> [https://mockup.com](https://)
 
<span style="color:orangered;">**Architecture:**</span> [Google OAuth2 Architecture](https://drive.google.com/file/d/1wPSzyPQhDtf-DT0X48hIJg5H5z5D8k-W/view?usp=sharing)  

### <span style="color:dodgerblue;">Scenario:</span> Login using a Google Account  
<span style="color:dodgerblue;">Given</span> I am a registered user  
<span style="color:dodgerblue;">And</span> my registered email is the same of my Google account  
<span style="color:dodgerblue;">And</span> I select login with Google  
<span style="color:dodgerblue;">Then</span> I get access to the application  
