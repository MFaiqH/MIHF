function auth() {
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //condition

    if(user == "admin" && password == "&#3567@MIHF") {
        window.location.assign('list.html')
        alert("Nice")
    }
    else{
        alert("Wrong Username or Password")
    }
}

setTimeout(() => {
    window.location.assign('index.html')
    alert("Session timeout")
}, 300000);

function loginAgain() {
    window.location.assign('index.html');
};

var players = [
    {   
        'id': 'Gustav',
        'image': 'ppic/gustav_ppic.jpeg',
        'name': 'Gustav Forsling',
        'team': 'Florida Panthers',
        'age': '27',
        'height': '182',
        'weight': '84',
        'position': 'D',
        'snc': 'Left',
        'gp': '18',
        'goals': '2',
        'assists': '3',
        'pim': '10',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Philip',
        'image': 'ppic/philip_ppic.jpeg',
        'name': 'Philip Grubauer', 
        'team': 'Seattle Kraken',
        'age': '32',
        'height': '185',
        'weight': '85',
        'position': 'G',
        'snc': 'Left',
        'gp': '30',
        'goals': '0',
        'assists': '1',
        'pim': '2',
        'gaa': '3.08',
        'svs': '82',
        'svp': '.877'
    }
]


function buildTable(data) {
    var table = document.getElementById('playersList')
    table.innerHTML = ''

    for (var i = 0; i < data.length; i++) {
        var row = `
        <tr>
            <td><img src='${players[i].image}'></img></td>
            <td>${players[i].name}</td>
            <td>${players[i].team}</td>
            <td>${players[i].age}</td>
            <td>${players[i].height}</td>
            <td>${players[i].weight}</td>
            <td>${players[i].position}</td>
            <td>${players[i].snc}</td>
            <td>${players[i].gp}</td>
            <td>${players[i].goals}</td>
            <td>${players[i].assists}</td>
            <td>${players[i].pim}</td>
            <td>${players[i].gaa}</td>
            <td>${players[i].svs}</td>
            <td>${players[i].svp}</td>
        </tr>`
        table.innerHTML += row
    }
    $('tr').on('click', function(){
        //this refers to which row is clicked
    })
}

buildTable(players)

$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if(order == 'desc'){
        $(this).data('order', "asc")
        players = players.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'

    }else{
        $(this).data('order', "desc")
        players = players.sort((a,b) => a[column] < b[column] ? 1 : -1)
        text += '&#9650'

    }
    $(this).html(text)
    buildTable(players)
})
