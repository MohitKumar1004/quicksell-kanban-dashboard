export const useSort = () => {

    // Sorting(descending) on the basis of priority
    const sortByPriority = (data) => {
        const sortedlist = {}
        Object.keys(data).forEach(priority => {
        sortedlist[priority] = data[priority].sort((a, b) => b.priority - a.priority)
        })
        return sortedlist
    }

    // Sorting(ascending) on the basis of title
    const sortByTitle = (data) => {
        const sortedlist = {}
        Object.keys(data).forEach(key => {
        sortedlist[key] = data[key].sort((a, b) => a.title.localeCompare(b.title))
        })
        return sortedlist
    }
    return [sortByPriority, sortByTitle]
}