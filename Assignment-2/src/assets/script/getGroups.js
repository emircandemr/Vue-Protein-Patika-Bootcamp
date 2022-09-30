import groupData from "../../assets/data/groupData.json";


function getGroupNames() {
	const groupNames = groupData.map(person => person.group);
	const uniqueNames = [...new Set(groupNames)];
	return uniqueNames;
}

export default getGroupNames;


