## Questions

This project is designed to manage user accounts for a service.

0. Which framework is used to implement this project?
1. Start the project in development mode and display the `/` page in the browser.
2. Send an empty POST request to `http://localhost:3000/api/db` using cURL or similar tools. Also, show the corresponding implementation in the editor and briefly explain the implementation.
3. Display the `/users/` page in the browser and explain its functionality after reading the implementation. Also, briefly explain its relationship with `src/app/api/users/route.ts`.
4. After reading the code in step 3, identify issues in both the page implementation and API implementation parts. A 3-minute review is sufficient.
5. Briefly explain the difference between `any` and `unknown` in TypeScript. You don't need to refer to detailed language specifications; feel free to use examples or analogies.
6. Show the user retrieval logic of the page from step 3 in the editor, explain the typing issues, and implement a solution. You may refer to the [reference material](https://www.typescriptlang.org/play/?#code/C4TwDgpgBACg9gZ2FAvFA3gKCjqBLAEwC4okAnPAOwHNtdg9gAbCE8q23KAIzgJDbAKNOjgCGAV2AALOGQCSxUkI6ioAYzHAI1OSEWDh1KAB8olCUyZr1ZCFogEAgsBIARB2olgCD566gPbTUCCBZtf3cHU3NLawBfTEx1OEokKAAzCGB1aXgkBFQoMQQQSnUoAAoASlQAPgwbVPTfYDESCUoAa0o4AHdKIrE+sUZYMjgAWzwECAA6OwQ4JgA3CErO0IyqR2q1O2AJMkHWsUxE5ObkCFy4fOQ0SrBEAPvalAasLhS05fmmODUSoAckUUDgGSgMmgz3SM2BABooLDgHNCHtvs0-nMAUDgQAVaTQBjMaAQqFE5EvfAIRFUpBzEksDG4H5LFg4wEgwnQH7aSjIcnQ+nIeFIlFzXj8Fk4NnY3HcykomkaOx+Fx0iW2ewRFyMuDyADKAHlDSoaDU9hc2aKEPcipUVmImBJWFBOj1+pRqiQnS7oDNYNSPo0uHhIZVQJByX7XVAAIQoNDAuDcABWN2AwNMZlj0CTaAsVlqByOgwyztmanDVXjIMI2aoUDzUAAZK2oeAIDHna60QRUEmoMD2DRgdUS9ky5lKxBqxG68CmRBG4MW+3O9HIXnGYwWIPk6PqOPJ4djjOmFWwwuQVKQKvm73oBuo93t0-JXwQAfh0eT1BS3PCtLzna9axBSQZDkRQH3XDtXx7f05kg2QFAHAtf3NY8JwAqcgNnedwOBTRtF0Mh9AIWCnzbDtIy7RC+xInQ9DBDCRyw7MTDMBD3yQpiyIon8iyYCdT2nYCr1wGtKkXbV1SzfA12ojcdzk3VRTSNpyjfQIHBwwDywIsCZJBbxWkcDVFMff0aOsvszPkxSkDEbTySCCB9LwwyQMIkzgVCcILIUps4KqHcAuyIKnK09QdPcnM7PmCL1KEuJRNws9vMknADKhMhXXOJIbSgSZRkGNASjKCoanqUNWSuKBTiGEYxiyHI8heBAal8+MnDIMgxBANEED6gaQEqU4cJkCY+nMCBZoAUX6uQQQAJQgBBnjSANCl6ZAXOKfrBrmcceomrQxDmCA1nIypKg8kgdqDdIQxme57tE2ppv6ObFuWsg1o2rbZg0VI2ioQoqD9QhEoQE6ZUai65gyOQFrEXInmDBoblkd6UQnQqgA).
7. When implementing a feature where the "Add Account" button should only be displayed if the current admin user's role is `writer` or `owner`, and hidden if the role is `viewer`, how would you implement this? Assume the admin user data is provided by `useMe`.
8. There's a request to add an update feature to the page from step 3. The form input UI is identical except for different processing logic and default values in the update form. How would you design the components to share the common implementation? Please implement it.
9. There's a request to add a delete feature to the page from step 3. The form input UI is identical except inputs are disabled. How would you design the components to share the common implementation? Please implement it.
10. Several screens have emerged with identical form input UI but completely different processing logic and button UI. For example, some screens have a reset button, or button text slightly varies depending on permissions. How would you design the components? Please implement it.

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
