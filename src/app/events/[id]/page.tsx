import EventDetailsPage from '@/components/EventDetailsPage';

import { Itypes } from '@/type';
import React from 'react';

export const instant = false;

const EventDetails = async({params}: {
  params: Promise<{ id: string }>}) => {
    const {id} = await params

    

    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/allEvents/${id}`)
    const data:Itypes = await res.json()
    return (
        <div>
            <EventDetailsPage eventData={data} ></EventDetailsPage>
        </div>
    );
};

export default EventDetails;