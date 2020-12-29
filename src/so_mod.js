export default class MyPack{
    constructor() {
        document.body.innerText = 'Hello World from MyPack';
    }
}

const so = (greeting) => {
    return `Hello bro, ${greeting}`;
}

export { so }