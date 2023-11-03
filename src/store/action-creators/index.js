export const creditCoins = (group, order) => {
    return (dispatch) =>{
        dispatch({
            group: group,
            order: order
        })
    }
}