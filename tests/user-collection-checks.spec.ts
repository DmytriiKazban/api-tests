import { test, expect } from '@playwright/test';

test("create user with array", async ({ request }) => {
    const issues = await request.post(`https://petstore.swagger.io/v2/user/createWithArray`,{
        headers:{
            accept: 'application/json',
            "Content-Type": 'application/json',
        },
        data:{
            id: 0,
            username: 'string',
            firstName: 'string',
            lastName: 'KA',
            email: 'string',
            password: 'string',
            phone: 'string',
            userStatus: 0
        }
    })
    expect(issues.status()).toBe(200);
});

test("check get user by user name", async ({request}) => {
    const response = await request.get(`https://petstore.swagger.io/v2/user/string`, {
        headers: {
          accept: "application/json",
        },
      })
    expect(response.ok()).toBeTruthy()
})
