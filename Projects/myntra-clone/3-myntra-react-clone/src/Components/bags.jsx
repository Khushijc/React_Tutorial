import { useSelector } from "react-redux"
import BagItem from "./BagItem"
import BagSummary from "./BagSummary"

const Bags = () => {
    const bagItems = useSelector(state=>state.bag);
    const items=useSelector(state=>state.items)
    const finalItem =items.filter(items=>{
        const itemIndex=bagItems.indexOf(items.id)
        return itemIndex>=0;
    })

    return <>
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    {finalItem.map(item=> <BagItem item={item}/>)}
                </div>
                <BagSummary/>

            </div>
        </main>
    </>

}
export default Bags