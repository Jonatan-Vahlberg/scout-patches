import { Card, Skeleton } from '@nextui-org/react';

const PatchListLoadingItem = () => (
    <Card className="mb-4 p-4">
        <div className="flex items-start gap-3">
        <Skeleton className='w-[80px] h-[80px] rounded-md' />
        <div className="w-full">
            <Skeleton className='w-[200px] h-[28px] mb-2 rounded-md' />
            <hr className="my-1"></hr>
            <div className='flex gap-3'>

            <Skeleton className='w-[36px] h-[36px]' />
            <Skeleton className='w-[36px] h-[36px]' />
            </div>
        </div>
        </div>
        <Skeleton className='w-full h-[40px] mt-4' />
    </Card>
);

export default PatchListLoadingItem;