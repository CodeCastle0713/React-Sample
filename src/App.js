import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import ContextProvider from './components/ContextProvider';
import Landing from './pages/Landing';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import Test3demo from './pages/Test3demo';
import Test4 from './pages/Test4';

function App() {
  return (
    <Provider store = { store }>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={< Landing />}></Route>
            <Route exact path='/test1' element={< Test1 />}></Route>
            <Route exact path='/test2' element={< Test2 />}></Route>
            <Route exact path='/test3' element={< Test3 />}></Route>
            <Route exact path='/test3demo' element={< Test3demo />}></Route>
            <Route exact path='/test4' element={< Test4 />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  );
}
export default App;
