import '../scss/style.scss';
import { KeyBoard } from './components/keyBoard/KeyBoard';
import { MonitorComponent } from './components/monitor/MonitiorComponent';
import { KlavaComponent } from './components/klava/KlavaComponent';
import { createStore } from './core/state/CreateStore';
import { rootReducer } from './redux/rootReducer';
import { initialState } from './redux/initialState';
import { storage } from './core/utils';

const store = createStore(rootReducer, initialState)

store.subscribe((state) => {
  storage('keyBoard-state', state)
})

const virtualKeyboard = new KeyBoard('#keyboard', {
  components: [MonitorComponent, KlavaComponent],
  store,
})
virtualKeyboard.render()
