import Banner from "@/components/homepage/banner";

export const revalidate = 30;

export default function HomePage() {
    return (
        <div className="p-3 border border-yellow-500">

           <Banner/>
            <div className="h-60 ">This is product</div>
        
        
        </div>
        
    )
}