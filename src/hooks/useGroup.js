export const useGroup = () => {
  
    // Grouping on the basis of priority
    const groupByPriority = (tickets) => {
        const listdata = []
        const priority = ['No priority', 'Low', 'Medium', 'High', 'Urgent']
        tickets.forEach((ticket) => {
            if(!listdata[priority[ticket.priority]]) {
                listdata[priority[ticket.priority]] = []
            }
            listdata[priority[ticket.priority]].push(ticket)
        })
        return listdata
      }
    
    // Grouping on the basis of user
    const groupByUser = (tickets, users) => {
        const listdata = []
        tickets.forEach((ticket) => {
            const userid = users.find(user => user.id === ticket.userId)
            if(userid) {
                if(!listdata[userid.name]) {
                    listdata[userid.name] = []
                }
                listdata[userid.name].push(ticket)
            }
        })
        return listdata
    }

    // Grouping on the basis of status
    const groupByStatus = (tickets) => {
        const listdata = []
        tickets.forEach((ticket) => {
            if(!listdata[ticket.status]) {
                listdata[ticket.status] = []
            }
            listdata[ticket.status].push(ticket)
        })
        return listdata
    }

    return [groupByStatus, groupByUser, groupByPriority]
}