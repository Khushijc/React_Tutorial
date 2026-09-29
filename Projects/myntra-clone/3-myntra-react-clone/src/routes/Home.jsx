import { useSelector } from "react-redux";
import HomeItems from "../Components/HomeItems.jsx"

const Home = () => {
    const items = useSelector((store)=>store.items)
    console.log(items);
    return <>
        <main>
            <div className="items-container">
                {items.map((item)=>{
                    return <HomeItems key={item.id} item={item} />
                })}
            </div>
        </main>
    </>
}
export default Home;