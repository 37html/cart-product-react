
function ButtonDelete({deleteProdect, id}){
    // console.log(ProductId)
    return(
        <button type="button" onClick={()=>{deleteProdect(id)}}>
            <img src="./img/icons/cross.svg" alt="Delete"/>
        </button>
    );
}

export default ButtonDelete;
