export const useSort = () => {

    const sortByPriority = (data) => {
        const sortedlist = {}
        Object.keys(data).forEach(priority => {
        sortedlist[priority] = data[priority].sort((a, b) => b.priority - a.priority)
        })
        return sortedlist
    }

    const sortByTitle = (data) => {
        const sortedlist = {}
        Object.keys(data).forEach(key => {
        sortedlist[key] = data[key].sort((a, b) => a.title.localeCompare(b.title))
        })
        return sortedlist
    }
    return [sortByPriority, sortByTitle]
}