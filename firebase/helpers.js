

export const snapshotToArrayWithIds = (snapshot) => {
    const data = snapshot.val();
    const array = [];
    for (let key in data) {
        array.push({ ...data[key], id: key });
    }
    return array;
}