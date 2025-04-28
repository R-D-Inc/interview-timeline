## Questions

This project is designed to manage user accounts for a service.

0. Please tell me which framework is used to implement this project.  
1. Launch this project in development mode and display the page corresponding to `/` in the browser.  
2. . Use a cURL command or similar to send an empty POST request to `http://localhost:3000/api/db`. Also, show me the corresponding implementation in the editor and briefly explain what it does.  
3. Display the page corresponding to `/users/` in the browser, and after reading the implementation, explain its functionality. Also, briefly describe its relationship with `src/app/api/users/route.ts`.  
4. Regarding the code you read in question 3, list any bad practices you notice in both the page implementation and the API implementation. A quick 3-minute review is sufficient.  
5. Briefly explain the difference between `any` and `unknown` in TypeScript. You don’t need to refer to detailed language specifications—just describe their use cases or use analogies.  
6. Show me the user-fetching logic for the page in question 3 in the editor, explain the type-related issues in its implementation, and then provide a solution by actually implementing it. You may refer to [this resource](https://www.typescriptlang.org/play/?#code=C4TwDgpgBACg9gZ2FAvFA3gKCjqBLAEwC4okAnPAOwHNtdg9gAbCE8q23KAIzgJDbAKNOjgCGAV2AALOGQCSxUkI6ioAYzHAI1OSEWDh1KAB8olCUyZr1ZCFogEAgsBIARB2olgCD566gPbTUCCBZtf3cHU3NLawBfTEx1OEokKAAzCGB1aXgkBFQoMQQQSnUoAAoASlQAPgwbVPTfYDESCUoAa0o4AHdKIrE+sUZYMjgAWzwECAA6OwQ4JgA3CErO0IyqR2q1O2AJMkHWsUxE5ObkCFy4fOQ0SrBEAPvalAasLhS05fmmODUSoAckUUDgGSgMmgz3SM2BABooLDgHNCHtvs0-nMAUDgQAVaTQBjMaAQqFE5EvfAIRFUpBzEksDG4H5LFg4wEgwnQH7aSjIcnQ+nIeFIlFzXj8Fk4NnY3HcykomkaOx+Fx0iW2ewRFyMuDyADKAHlDSoaDU9hc2aKEPcipUVmImBJWFBOj1+pRqiQnS7oDNYNSPo0uHhIZVQJByX7XVAAIQoNDAuDcABWN2AwNMZlj0CTaAsVlqByOgwyztmanDVXjIMI2aoUDzUAAZK2oeAIDHna60QRUEmoMD2DRgdUS9ky5lKxBqxG68CmRBG4MW+3O9HIXnGYwWIPk6PqOPJ4djjOmFWwwuQVKQKvm73oBuo93t0-JXwQAfh0eT1BS3PCtLzna9axBSQZDkRQH3XDtXx7f05kg2QFAHAtf3NY8JwAqcgNnedwOBTRtF0Mh9AIWCnzbDtIy7RC+xInQ9DBDCRyw7MTDMBD3yQpiyIon8iyYCdT2nYCr1wGtKkXbV1SzfA12ojcdzk3VRTSNpyjfQIHBwwDywIsCZJBbxWkcDVFMff0aOsvszPkxSkDEbTySCCB9LwwyQMIkzgVCcILIUps4KqHcAuyIKnK09QdPcnM7PmCL1KEuJRNws9vMknADKhMhXXOJIbRpJwyDIMQBDCp8Om6XoBneBoW0DD06soABtABdB08xqz16vqKBSvKkA0QQIaKsdJ89kuTSoEmUZBjQEoygqGoBq+VkrigU4hhGMYshyPIXgQGpfPjGZxpASpThwmQJj6cwIAegBRMq5BBAAlCAEGeNIA0KXpkBc4oyoquZxzO66tDEOYIDWcjKkqDySH+oN0hDGZ7iR0Taju-pHpet6yE+77ftmDRUjaKhCioP1CEShBwZlbbobmDI5GesRcieYMGhuWQsZRCdCqAA) if needed.  
7. For the page in question 3, implement a feature where the "Add Account" button is displayed only if the logged-in admin user’s role is `writer` or `owner`, and hidden if the role is `viewer`. Assume the admin user’s data is provided by `useMe`.  
8.  There is a request to add an update feature to the page in question 3. Other than the difference in processing logic and the fact that the update form should have default values, the input UI should remain the same. How would you design the component to reuse the implementation? Implement it.  
9.  There is a request to add a delete feature to the page in question 3. The input UI should remain the same, but the inputs should be disabled. How would you design the component to reuse the implementation? Implement it.  
10. As in questions 8 and 9, there are now multiple pages where the input UI is identical, but the processing and button UI differ (e.g., some have reset buttons, or button text varies by permissions). How would you design the component structure to handle this? Implement it.  


## Preparation

### Start Project In Development Mode

With the commands below you can install the dependencies and start the server in development mode.

```shell
yarn install
yarn dev
```

If you prefer docker environment take this.

```shell
docker compose up
```
