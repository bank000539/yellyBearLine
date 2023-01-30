const text: string = 'Hello TypeScript';
document.querySelector('#btn-models').addEventListener('click', (e:Event) => getModels());

function getModels() {
    console.log(text);
}