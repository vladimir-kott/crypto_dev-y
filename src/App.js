import Main from './app/layouts/main';
import NavPanel from './app/layouts/navPanel';

function App() {
  return (
    <div className="App max-h-screen">
      <div className='flex flex-col h-screen bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD] border-2 border-black'>
        <div className="flex justify-center items-center gap-[15px] w-full border-2 border-black h-full">
        <div className="border-2 border-black text-center leading-loose text-sm p-[20px] rounded-[10px] br-black w-full h-full">
            <Main/>
        </div>
        <div className="border-2 border-black text-center leading-loose text-sm p-[20px] rounded-[10px] br-black w-34 h-full">
               <NavPanel/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
