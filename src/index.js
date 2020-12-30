import Pack, {so} from './so_mod.js';

import './styles/main.scss';

for (let i = 0; i < 5; i++) {
    Pack.Log(so('Moke'+(1+Math.round(Math.random()*9))));
}