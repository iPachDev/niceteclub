'use client';
import {useEffect, useState} from 'react'
import Banner from '@/components/Banner';
import TopSeller from '@/components/TopSeller';
import Footer from '@/components/Footer';


export default function Home() {

    

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if(products.length <= 0){getData();}
    }, [products]);

    async function getData() {
        try{
            const path = `${process.env.NEXT_PUBLIC_HOSTAPI}/api/products?populate[0]=region&populate[1]=images`;
            const res = await fetch(path);
            if (!res.ok) {
                setIsLoading(false);
                // This will activate the closest `error.js` Error Boundary
                throw new Error('Failed to fetch data')
            }
            
            let {data} = await res.json();
            setIsLoading(false);
            setProducts(data);
        }catch(e){
            setIsLoading(false);
            throw new Error('Failed to fetch data')
        }
        
    }
    

    return (<>
        <div>
            <Banner />
            <TopSeller title='Oaxaca' slug='oaxaca' list={products} isLoading={isLoading}/>
            <TopSeller title='Michoacán' slug='michoacan' list={products} isLoading={isLoading}/>
            <TopSeller title='Taxco' slug='taxco' list={products} isLoading={isLoading}/>
        </div>
        <Footer />
    </>)
}
