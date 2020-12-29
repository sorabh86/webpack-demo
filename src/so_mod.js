class MyPack{
    constructor() {
        this.CreateElement();
    }
    CreateElement() {
        let ele = document.createElement('p');
        ele.innerText = 'Hello World from MyPack';
        document.body.appendChild(ele);
    }
    Log(str) {
        let ele = document.createElement('p');
        ele.innerText = str;
        document.getElementById('root').appendChild(ele);
    }
}
const Pack = new MyPack;
const so = (greeting) => {
    return `Hello bro, ${greeting}`;
}

export default Pack;
export { so }