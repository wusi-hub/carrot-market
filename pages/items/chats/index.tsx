import type { NextPage } from "next";

const Chats: NextPage = () => {
    return <div className='py-10 divide-y-[1px]'>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) =><div key={i} className='flex mb-3 px-4 cursor-pointer py-3 items-center space-x-3'>
          <div className='w-10 h-10 rounded-full bg-slate-300' />
          <div>
            <p className='text-gray-700'>Steve Jebs</p>
            <p className='text-sm text-gray-500'>그냥... 내일 오후 2시에 모퉁이에서 만나용!</p>
          </div>
        </div>)}
        
    </div>
};

export default Chats;