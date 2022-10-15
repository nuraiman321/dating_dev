let users = ['dt',
    'aden',
    'allison',
    'bern',
    'callum',
    'cath',
    'felipe',
    'jian',
    'jimmy',
    'linda',
    'matt',
    'naveen',
    'ned',
    'peter',
    'sam',
    'sannan',
    'sara',
    'stephen',
    'stuart',
    'tom',
    'nuraiman']


users[0] = 'mistyrose'

users.filter(user => user[0] !== 'n').map(user => console.log(user))
