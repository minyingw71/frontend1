import Item from './Item'

// const arr = [1,2,3]

const List = ({listData, deleteData})=>{
    // console.log(listData)
    return <div className="list">
        {
            listData.map(item =>{
                const {note , date, time, id} = item
                console.log('note:',note)
                return <Item key={id} id={id} noteData={note} dateData={date} timeData={time} deleteData={deleteData}/>
            })
        }


        {/* <Item />
        <Item /> */}
        {/* {arr.map(i=><Item />)

        } */}
    </div>
}
export default List