import Main from './app/layouts/main';
import NavPanel from './app/layouts/navPanel';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col h-screen bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD]'>
        <Main/>
        <NavPanel/>
      </div>
    </div>
  );
}

export default App;
