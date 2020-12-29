import MyPack, {so} from './so_mod.js';

for (let i = 0; i < 5; i++) {
    console.log(so('Moke'+(1+Math.round(Math.random()*9))));
}

new MyPack;