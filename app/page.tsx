import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/questions');
  }

  return (
    <main className='bg-[#1E293B] min-h-screen min-w-full flex flex-col justify-center items-center'>
      <h1 className='text-lg text-[#28A0F1] p-4'>Welcome to meetcode</h1>
      <h1 className='text-lg text-[#28A0F1] p-4'>Your <span className='text-2xl text-[#FF14BD]'>next level</span> coding platform</h1>
      <Link href='api/auth/signin'>
        <button className='text-[#28A0F1] min-w-[200px] border-[0.125em] border-[#28A0F1] border-solid rounded-lg p-2 m-2 shadow-[0_0_10px_2px_#28A0F1,_0_0_10px_2px_#28A0F1_inset] [text-shadow:_0_0_0.125em] hover:text-[#31202B] hover:bg-[#28A0F1] hover:shadow-[0_0_100px_10px_#28A0F1] hover:[text-shadow:_none]'>
          SignIn
        </button>
      </Link>
      {/* <Link href='api/auth/signin'>
        <button className='text-[#28A0F1] min-w-[200px] border-[0.125em] border-[#28A0F1] border-solid rounded-lg p-2 m-2 shadow-[0_0_10px_2px_#28A0F1,_0_0_10px_2px_#28A0F1_inset] [text-shadow:_0_0_0.125em] hover:text-[#31202B] hover:bg-[#28A0F1] hover:shadow-[0_0_100px_10px_#28A0F1] hover:[text-shadow:_none]'>
          SignUp
        </button>
      </Link> */}
    </main>
  );
};
export default Home;
