import { Header } from './Header';
import { Layout } from './Layout';
import { Footer } from './Footer';
import { PockemonCard } from './PockemonCard';
import { pockemonData } from '../data/PockemonData';

import s from './App.module.css';
import bg2 from '../assets/bg2.jpg';
import backPicture from '../assets/card-back-side.jpg'

function App() {
  return (
    <>
      <Header title='Pokemon game' descr='the pokemon game' />
      <Layout title='Game description' urlBg={bg2}>
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
      </Layout>
      <Layout title='Pokemon show' colorBg='red'>
        <div className={s.flex}>
          { pockemonData.map(item => (
            <PockemonCard 
              key = { item.id }
              values = { item.values }
              name = { item.name }
              img = { item.img }
              pID = { item.id } 
              type = { item.type}
              backPicture = { backPicture }
            />
          ))}
        </div>
      </Layout>
      <Layout title='Pokemon layout 3' urlBg={bg2}>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
