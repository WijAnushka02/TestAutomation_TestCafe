import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example');

test('My first test', async t => {
    let name = 'Anushka Wijesinghe'
    await t
        .typeText('#developer-name', name)
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql(`Thank you, ${name}!`);
});

test('My second test', async t => {
    let name = 'Anushka Wijesinghe'
    await t
        .typeText('input#developer-name', name)
        .click('button[data-testid="submit-button"]')
        .expect(Selector('h1').innerText).eql(`Thank you, ${name}!`);
});

test('My third test', async t => {
    let name = 'Anushka Wijesinghe'
    await t
        .debug()
        .typeText('input#developer-name', name)
        .click(Selector('#submit-button'))
        .expect(Selector('#article-header').innerText).eql(`Thank you, ${name}!`);
});

test('My fourth test', async t => {
    let name = 'Anushka Wijesinghe'
    await t
        .typeText(Selector('#developer-name'), name)
        .click('button[data-testid="submit-button"]')
        .expect(Selector('h1').innerText).eql(`Thank you, ${name}!`);
});

test('My fifth test', async t => {
    let name = 'Anushka Wijesinghe'
    await t
        .typeText(Selector('#developer-name'), name)
        .expect(Selector('#developer-name').value).eql(name)
        .click('button[data-testid="submit-button"]')
        .expect(Selector('h1').innerText).eql(`Thank you, ${name}!`)
        .expect(Selector('h1').innerText).contains(`Thank you, ${name}!`);
});
