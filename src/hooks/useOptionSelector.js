import { useGroup } from "./useGroup"
import { useSort } from "./useSort"

export const useOptionSelector = () => {
    
    const [groupByStatus, groupByUser, groupByPriority] = useGroup()

    const [sortByPriority, sortByTitle] = useSort()

    // Choosing and Grouping on the basis of status, user or priority
    const groupTickets = (state, tickets, users) => {
        // eslint-disable-next-line
        switch (state) {
            case "0": return groupByStatus(tickets)
            case "1": return groupByUser(tickets, users)
            case "2": return groupByPriority(tickets)
        }
        return []
    }

    // Choosing and Sorting on the basis of priority or title
    const orderTickets = (state, tickets) => {
        // eslint-disable-next-line
        switch (state) {
            case "0": return sortByPriority(tickets)
            case "1": return sortByTitle(tickets)
        }
        return []
    }

    return [groupTickets, orderTickets]
}