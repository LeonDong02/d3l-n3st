const members = new Map();
members.set('HOME', 'https://d3l-n3st.vercel.app/');
members.set('LEON', 'https://www.leondong.com/');
members.set('TRI', 'https://www.triho.dev/');
members.set('EDDY', 'https://www.eddyguo.ca/');
members.set('BRIAN', 'https://briantu.tech/');
members.set('JOSEPHINE', 'https://josephine-widjaja.com/');
members.set('ANNIE', 'https://www.anniesun.ca/');
// ADD YOUR NAME AND LINK ABOVE

var temp = [];
for (const [name, link] of members) {
    temp.push(link);
}

const next = new Map();
for (var i = 0; i < temp.length - 1; i++) {
    next.set(temp[i], temp[i + 1]);
}
next.set(temp[temp.length - 1], temp[0]);

const prev = new Map();
prev.set(temp[0], temp[temp.length - 1]);
for (var i = 1; i < temp.length; i++) {
    prev.set(temp[i], temp[i - 1]);
}

export { members, next, prev };
