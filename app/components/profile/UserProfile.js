"use client";

import { Button, Card, Skeleton } from '@nextui-org/react';
import { useUser } from '../../../context/UserContext';

const UserProfile = () => {
  const user = useUser();
  console.log("USER:: ", user);
  return (
    <Card shadow="md" className='p-4'>
        {(!user.user || user.userLoading) &&(
            <>
                <Skeleton className='w-[187px] h-[18px] mb-2 rounded-sm' />
                <Skeleton className='w-[234px] h-[14px]' />
                <Skeleton className='h-[40px] rounded-md mt-4' />
            </>
        )}
        {user.user && !user.userLoading && (
            <>
        <h2 className='text-xl font-semibold'>{user.user.displayName}</h2>
        <p className='text-sm text-gray-500'>{user.user.email}</p>
    
        <Button
          className="w-full mt-4 bg-sweden hover:bg-sweden-dark"
          color="primary"
          type="submit"
          auto
          >
          Logga ut
        </Button>
            </>
        )}
    </Card>
  );
}

export default UserProfile;