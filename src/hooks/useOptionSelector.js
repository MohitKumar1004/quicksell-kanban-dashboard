import { useGroup } from "./useGroup"
import { useSort } from "./useSort"

export const useOptionSelector = () => {
    
    const [groupByStatus, groupByUser, groupByPriority] = useGroup()

    const [sortByPriority, sortByTitle] = useSort()

    const groupTickets = (state, tickets, users) => {
        console.log(state)
        switch (state) {
            case "0": return groupByStatus(tickets)
            case "1": return groupByUser(tickets, users)
            case "2": return groupByPriority(tickets)
        }
        return []
    }

    const orderTickets = (state, tickets) => {
        switch (state) {
            case "0": return sortByPriority(tickets)
            case "1": return sortByTitle(tickets)
        }
        return []
    }

    return [groupTickets, orderTickets]
}