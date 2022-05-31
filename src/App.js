import Main from './app/layouts/main';
import NavPanel from './app/layouts/navPanel';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col h-screen bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD]'>
        <div className='grid grid-rows-1 grid-flow-col gap-1 mt-4 mb-4 ml-4 h-screen'>
          <div className="col-span-12 bg-[#FFFFF8] rounded-2xl">
            <Main/>
          </div>
          <div className="col-span-1"> {/*border-2 border-black*/}
            <NavPanel/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
