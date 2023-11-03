import { useOptionSelector } from "../../hooks/useOptionSelector"

export default function reducer(state = [], action) {
    const {group, order} = action
    const [groupTickets, orderTickets] = useOptionSelector()
    const newdata = groupTickets(group, state, order)
    const state = orderTickets(order, state, )
    return state
}