import React from 'react';
import {Card, CardBody, CardFooter, Image, Skeleton, Badge} from "@nextui-org/react";

export default function TopSeller({title, slug, list, isLoading}) {
    
    let filterItems = list.filter(({attributes}) => attributes.region.data.attributes.slug === slug);

    return (<div className='container mx-auto mb-10'>
        <diiv className='text-5xl text-center'>{title}</diiv>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-5">
        {filterItems.map(({id:_id, attributes : item }, index) => (
            <Card shadow="sm" key={`${slug}-product-${_id}`} isPressable onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0">
                    <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[250px]"
                    src={`${process.env.NEXT_PUBLIC_HOSTAPI}${item.images.data[0].attributes.url}`}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <lable className='capitalize'>{item.title}</lable>
                    <p className="text-default-500">{parseInt(item.price).toLocaleString('es-MX', {style: 'currency',currency: 'MXN'})}</p>
                </CardFooter>
            </Card>
        ))}
        {filterItems.length <= 0 && !isLoading && <div className='text-center'>No hay productos disponibles</div>}
        {isLoading && <>
            <Skeleton className="rounded-lg"><div className="h-[250px] rounded-lg bg-default-300"></div></Skeleton>
            <Skeleton className="rounded-lg"><div className="h-[250px] rounded-lg bg-default-300"></div></Skeleton>
            <Skeleton className="rounded-lg"><div className="h-[250px] rounded-lg bg-default-300"></div></Skeleton>
        </>}
        </div>
    </div>)
}
