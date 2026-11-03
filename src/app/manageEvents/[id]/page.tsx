import EventDetailsPage from '@/components/EventDetailsPage';
import { Itypes } from '@/type';

const ManageEventDetailPage = async ({ params }: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params
    console.log(id);
    // const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/allEvents/${id}`)
    // const data: Itypes = await res.json()
    return (
        <div>
            {/* <EventDetailsPage eventData={data} ></EventDetailsPage> */}
            hello
        </div>
    );
};

export default ManageEventDetailPage;