/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Route, Routes} from 'react-router-dom';
import {Landing} from '@designer/landing'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd/dist/core';
import { Application } from '@designer/shared/ui';
import {Login, Register} from '@designer/core/services'

export function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path="/" element={<Landing/>} ></Route>
        <Route path="/application" element={<Application/>} ></Route>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
    </DndProvider>
  );
}

export default App;
