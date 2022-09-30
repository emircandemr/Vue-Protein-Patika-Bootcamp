
import groupData from "../../assets/data/groupData.json";

const getGroup = (groupName) => {
    let filterByGroupName = groupData.filter(person => person.group === groupName);
    return filterByGroupName
}

export default getGroup