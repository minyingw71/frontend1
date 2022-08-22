const Item = ({id, noteData, dateData, timeData, deleteData })=>{

    function deleteItem(){
        deleteData(function(prev){
            return prev.filter(item => item.id !==id)
        })
    }

    return <div className="item">
        <div>
            <p>{noteData}</p>
            <p>{`${dateData} ${timeData}`}</p>
        </div>
    <button onClick={deleteItem}   className="remove">Remove</button>
    </div>
}
export default Item