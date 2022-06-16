import Main from './app/layouts/main';
import NavPanel from './app/components/navPanel';
import Ticker from './app/components/ticker';
import MobileNav from './app/components/mobileNav';

function App() {
  return (
    <div className="App max-h-screen">
      <div className='flex flex-col items-center h-screen bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD] border-2 border-black'>
        <div className="box-border flex sam:flex-col sus:flex-col scm:flex-col sxm:flex-col sm:flex-row justify-center items-center gap-x-[5px] w-full max-w-[1920px] border-2 border-black h-full">
        <div className="border-2 border-rose-400 text-center leading-loose text-sm sm:p-[20px] sus:p-[2px] sam:p-[7px] scm:p-[7px] sxm:p-[7px] br-black w-full h-full">
          <Ticker/>
          <Main/>
        </div>
        <div className="sus:hidden sam:hidden scm:hidden sxm:hidden sm:block border-2 border-black text-center leading-loose text-sm p-[20px] rounded-[10px] br-black w-34 h-full">
            <NavPanel/>
        </div>
          <MobileNav/>
        </div>
      </div>
    </div>
  );
}

export default App;
