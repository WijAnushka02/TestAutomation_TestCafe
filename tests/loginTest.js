import { Selector } from 'testcafe';

fixture `Login Test for Pragmatic Test Labs`
    .page `http://hrm.pragmatictestlabs.com`;

test('Should login successfully with valid credentials', async t => {
    // 1. Enter the username
    await t.typeText('#txtUsername', 'Admin');

    // 2. Enter the password
    await t.typeText('#txtPassword', 'Ptl@#321');

    // 3. Click the login button
    await t.click('#btnLogin');

    // 4. Assert that the welcome message contains "Welcome Admin"
    const welcomeMessage = Selector('#welcome');
    
    await t
        .expect(welcomeMessage.innerText).contains('Welcome Admin');
});