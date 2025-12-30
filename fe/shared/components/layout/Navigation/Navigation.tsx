'use client';
import { useRouter } from 'next/navigation';
import { NavigationLink } from '@/shared/components/ui/NavigationLink';
import { NAVIGATION_PATH } from '@/shared/constants/navigation';
import { logout } from '@/features/auth/apis/authApi';

export const Navigation = () => {
  const router = useRouter();
  const handleLogOut = async () => {
    await logout();

    router.push(NAVIGATION_PATH.SIGNIN);
  };
  return (
    <div className="w-full flex justify-between items-center bg-[rgba(0,0,0,0.2)] p-4">
      <h1 className="pl-17.5 text-white font-bold text-2xl">Todo List</h1>
      <nav className="w-[40%]">
        <ul className="w-full pl-0 flex justify-around">
          <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP} />
          <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE} />
          <li className="list-none">
            <button
              className="font-['Times New Roman',Times,serif] w-full border-0 cursor-pointer outline-none appearance-none transition duration-300 block bg-white text-[#008080] text-[20px] font-bold px-5 py-3 rounded-[10px] hover:bg-[#d8d8d8]"
              onClick={handleLogOut}
            >
              SignOut
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
