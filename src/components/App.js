import { Header } from './Header';
import { Layout } from './Layout';
import { Footer } from './Footer';

import s from './App.module.css';
import bg2 from '../assets/bg2.jpg';

function App() {
  return (
    <>
      <Header title='This is the pokemon game' descr='Pokemon description' />
      <Layout title='Pokemon layout 1' descr='Layout 1 description' urlBg={bg2} />
      <Layout title='Pokemon layout 2' descr='Layout 2 description' colorBg='red' />
      <Layout title='Pokemon layout 3' descr='Layout 3 description' urlBg={bg2} />
      <Footer />
    </>
  );
}

export default App;
