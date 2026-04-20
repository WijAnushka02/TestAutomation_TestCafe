import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('A failing test', async t => {
    const nameInput = Selector('#developer-name');

    await t
        .typeText(nameInput, 'Peter')
        .typeText(nameInput, 'Paker', { replace: true })
        .typeText(nameInput, 'r', { caretPos: 2 })
        .expect(nameInput.value).eql('ABC');
});