export const ItemSummary = ({name, description, quantity, itemType}: Item) => {
    return <div className="flex flex-row border border-black p-5 m-1 justify-between">
            <div>
                <h3 className="font-sans text-xl font-bold">{name}</h3>
                <p>{description}</p>    
            </div>
            <div className="flex flex-row font-semibold ">
                <span></span>
                <p>{quantity}</p>
                <span>{"x"}</span>
                <p>{itemType}</p>
            </div>
        </div>
}