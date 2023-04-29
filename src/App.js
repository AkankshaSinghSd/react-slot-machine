import SlotMachine from './SlotMachine';
import "./App.css"

const App=()=> {
  return (
    <>
    <h1 className='heading'>
      <span >Slot Machine Game</span>
    </h1>
    <div className='slot'>
      <SlotMachine x="😃" y="😃" z="😃"/>
      <hr />
      <SlotMachine x="🍎" y="🍌" z="😃"/>
      <hr />
      <SlotMachine x="🌊" y="🌘" z="😃"/>
      <hr />
      <SlotMachine x="🌂" y="🍉" z="😃"/>
    </div>
    </>
  );
}

export default App;
