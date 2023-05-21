const Signup = () => {
  return (
    <main className='bg-[#1E293B] min-h-screen min-w-full grid place-items-center'>
      <div className='bg-[rgba(255,_255,_255,_0.05)] w-80 h-fit rounded-2xl shadow-2xl grid-flow-row'>
        <div className='m-4 p-4 box-border'>
          <h1 className='p-4 pl-0 text-[#28A0F1]'>Email</h1>
          <input
            className='p-2 h-fit w-full rounded-sm border-[2px] border-[#28A0F1] placeholder:opacity-50 focus:placeholder:opacity-100 outline-none'
            placeholder='Enter your Email Id'
          ></input>
        </div>
        <div className='m-4 mt-0 p-4 pt-0 box-border'>
          <h1 className='p-4 pl-0 text-[#28A0F1]'>Password</h1>
          <input
            className='p-2 h-fit w-full rounded-sm border-[2px] border-[#28A0F1] placeholder:opacity-50 focus:placeholder:opacity-100 outline-none'
            placeholder='Enter your password'
            type='password'
          ></input>
        </div>
        <div className='m-4 mt-0 p-4 pt-0 box-border'>
          <h1 className='p-4 pl-0 text-[#28A0F1]'>Role</h1>
          <select className='p-2 h-fit w-full rounded-sm border-[2px] border-[#28A0F1] outline-none'>
            <option selected>User</option>
            <option>Admin</option>
          </select>
        </div>
        <div className='m-4 p-4 box-border grid'>
          <button className='text-[#28A0F1] border-[0.125em] border-[#28A0F1] border-solid rounded-lg p-2 m-2 shadow-[0_0_10px_2px_#28A0F1,_0_0_10px_2px_#28A0F1_inset] [text-shadow:_0_0_0.125em] hover:text-[#1E293B] hover:bg-[#28A0F1] hover:shadow-[0_0_100px_10px_#28A0F1] hover:[text-shadow:_none]'>
            SignUp
          </button>
        </div>
      </div>
    </main>
  );
};

export default Signup;
