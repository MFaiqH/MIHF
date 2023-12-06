function auth() {
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //condition

    if(user == "admin" && password == "1223334444") {
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
        'id': 'Asyraaf',
        'image': 'ppic/asyraaf.jpg',
        'name': 'Muhammad Asyraaf Haikal Bin M.Haikal',
        'team': 'Panthers',
        'nt': 'U15,U20,Mens',
        'age': '20',
        'height': '167',
        'weight': '80',
        'position': 'G',
        'snc': 'Left',
        'gp': '43',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '9.59',
        'svs': '866',
        'svp': '.766'
    },
    {
        'id': 'Gabriel',
        'image': 'ppic/gabriel.jpeg',
        'name': 'Gabriel Goh Juan Jie', 
        'team': 'Ice Wolves',
        'nt': 'U15,Mens',
        'age': '19',
        'height': '178',
        'weight': '76',
        'position': 'F',
        'snc': 'Right',
        'gp': '29',
        'goals': '12',
        'assists': '12',
        'pim': '0',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Raeef',
        'image': 'ppic/raeef.jpeg',
        'name': 'Raeef Majid bin Raphael Sadikin',
        'team': 'Grizzlies',
        'nt': 'U15,U18',
        'age': '15',
        'height': '171',
        'weight': '65',
        'position': 'G',
        'snc': 'Left',
        'gp': '5',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '?',
        'svs': '144',
        'svp': '.683'
    },
    {
        'id': 'BK',
        'image': 'ppic/bk.jpeg',
        'name': 'Chua Boon Keong (BK)', 
        'team': 'Avengers',
        'nt': 'U18,U20',
        'age': '25',
        'height': '170',
        'weight': '63',
        'position': 'G',
        'snc': 'Left',
        'gp': '2',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '27.11',
        'svs': '?',
        'svp': '.375'
    },
    {   
        'id': 'Richard',
        'image': 'ppic/richard.jpeg',
        'name': 'Yow Cheong Jun (Richard)',
        'team': 'Panthers',
        'nt': 'Mens',
        'age': '32',
        'height': '158',
        'weight': '75',
        'position': 'W',
        'snc': 'Left',
        'gp': '13',
        'goals': '3',
        'assists': '1',
        'pim': '2',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Faris',
        'image': 'ppic/faris.jpeg',
        'name': 'Amir Faris Azra', 
        'team': 'Reapers',
        'nt': 'U15,U18,U20,Mens',
        'age': '18',
        'height': '172',
        'weight': '85',
        'position': 'W',
        'snc': 'Right',
        'gp': '43',
        'goals': '58',
        'assists': '25',
        'pim': '18',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Irsyad',
        'image': 'ppic/irsyad.png',
        'name': 'Muhammad Irsyaduddin bin Burhanuddin',
        'team': 'Johor Tigers',
        'nt': 'U20,Mens',
        'age': '22',
        'height': '164',
        'weight': '70',
        'position': 'D',
        'snc': 'Right',
        'gp': '6',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Ash',
        'image': 'ppic/ash.jpeg',
        'name': 'Maahes rajakumar(Ash)', 
        'team': 'Reapers',
        'nt': 'Mens',
        'age': '34',
        'height': '164',
        'weight': '50',
        'position': 'W',
        'snc': 'Right',
        'gp': '6',
        'goals': '1',
        'assists': '0',
        'pim': '2',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Haidan',
        'image': 'ppic/haidan.jpeg',
        'name': 'Haidan Safiy Bin Hazurin',
        'team': 'Outlaws',
        'nt': 'U15,U20',
        'age': '19',
        'height': '176',
        'weight': '71',
        'position': 'F',
        'snc': 'Right',
        'gp': '3',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Izra',
        'image': 'ppic/adam_izra.jpeg',
        'name': 'Adam Izra Bin Muhammed Radzif ', 
        'team': 'Panthers',
        'nt': 'U18,U20',
        'age': '17',
        'height': '180',
        'weight': '92',
        'position': 'D',
        'snc': 'Right',
        'gp': '6',
        'goals': '0',
        'assists': '0',
        'pim': '4',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Run',
        'image': 'ppic/hao_run.jpeg',
        'name': 'Lim Hao Run',
        'team': 'Panthers',
        'nt': 'U20,Mens',
        'age': '21',
        'height': '185',
        'weight': '95',
        'position': 'D',
        'snc': 'Right',
        'gp': '33',
        'goals': '9',
        'assists': '9',
        'pim': '14',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Amirul',
        'image': 'ppic/amirul.jpg',
        'name': 'Mohamad Amirul Azrin Bin Kamarul Bahrin', 
        'team': 'Panthers',
        'nt': '-',
        'age': '29',
        'height': '183',
        'weight': '74',
        'position': 'D',
        'snc': 'Left',
        'gp': '0',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Alif',
        'image': 'ppic/alif.jpeg',
        'name': 'Alif Haiman Bin Hanapiyah',
        'team': 'Tigers',
        'nt': 'U18',
        'age': '18',
        'height': '180',
        'weight': '114',
        'position': 'D',
        'snc': 'Right',
        'gp': '6',
        'goals': '0',
        'assists': '1',
        'pim': '2',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Harith',
        'image': 'ppic/harith.jpeg',
        'name': 'Adam Harith Bin Mohammad Noor', 
        'team': 'Panthers', 
        'nt': 'U15,U20,Mens',
        'age': '19',
        'height': '172',
        'weight': '65',
        'position': 'W',
        'snc': 'Left',
        'gp': '38',
        'goals': '9',
        'assists': '17',
        'pim': '22',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Faiq',
        'image': 'ppic/faiq.JPG',
        'name': 'Muhammad Faiq Haikal Bin M Haikal',
        'team': 'Reapers',
        'nt': 'U15,U18,U20',
        'age': '18',
        'height': '169',
        'weight': '70',
        'position': 'D',
        'snc': 'Left',
        'gp': '12',
        'goals': '1',
        'assists': '4',
        'pim': '2',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Alqish',
        'image': 'ppic/alqish.jpeg',
        'name': 'Muhamad Alqish Nazri Bin Abdullah', 
        'team': 'Tigers',
        'nt': 'U15',
        'age': '15',
        'height': '170',
        'weight': '52',
        'position': 'W',
        'snc': 'Right',
        'gp': '5',
        'goals': '2',
        'assists': '1',
        'pim': '2',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Nate',
        'image': 'ppic/nate.jpeg',
        'name': 'Nathaniel Shawn Yu',
        'team': 'Bangkok Warriors',
        'nt': 'U18',
        'age': '17',
        'height': '170',
        'weight': '71',
        'position': 'F',
        'snc': 'Right',
        'gp': '31',
        'goals': '10',
        'assists': '4',
        'pim': '2',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Eugene',
        'image': 'ppic/eugene.jpeg',
        'name': 'Eugene Low Ju Hong', 
        'team': 'Frostbiters',
        'nt': 'U15,U20,Mens',
        'age': '19',
        'height': '167',
        'weight': '60',
        'position': 'W',
        'snc': 'Right',
        'gp': '31',
        'goals': '12',
        'assists': '6',
        'pim': '0',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Gerald',
        'image': 'ppic/gerald.jpeg',
        'name': 'Gerald Tee Xuen Yeah',
        'team': 'Outlaws',
        'nt': 'Mens',
        'age': '20',
        'height': '175',
        'weight': '75',
        'position': 'W',
        'snc': 'Right',
        'gp': '5',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Jaythesh',
        'image': 'ppic/jaythesh.jpeg',
        'name': 'Jaytheshwaaran Rajasegaran', 
        'team': 'Reapers',
        'nt': 'U18,U20',
        'age': '18',
        'height': '168',
        'weight': '74',
        'position': 'C',
        'snc': 'Right',
        'gp': '23',
        'goals': '2',
        'assists': '3',
        'pim': '4',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Ariff',
        'image': 'ppic/ariff.jpg',
        'name': 'Raja Ariff Bin Raja Azmi',
        'team': 'Grizzlies',
        'nt': 'U18',
        'age': '17',
        'height': '176',
        'weight': '72',
        'position': 'W',
        'snc': 'Right',
        'gp': '6',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Azlly',
        'image': 'ppic/azlly.jpg',
        'name': 'Tengku Muhammad Azlly Bin Tengku Abdillah', 
        'team': 'Reapers',
        'nt': 'Mens',
        'age': '43',
        'height': '177',
        'weight': '81',
        'position': 'G',
        'snc': 'Left',
        'gp': '58',
        'goals': '0',
        'assists': '1',
        'pim': '0',
        'gaa': '6.11',
        'svs': '539+',
        'svp': '.816'
    },
    {   
        'id': 'Ayman',
        'image': 'ppic/ayman.jpg',
        'name': 'Syed Ayman Shahabuddin',
        'team': 'Reapers',
        'nt': 'U20,Mens',
        'age': '22',
        'height': '175',
        'weight': '70',
        'position': 'W',
        'snc': 'Right',
        'gp': '29',
        'goals': '10',
        'assists': '14',
        'pim': '6',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Jun',
        'image': 'ppic/jun.jpg',
        'name': 'Lee Jun Xian', 
        'team': 'Avengers',
        'nt': 'U18',
        'age': '16',
        'height': '174',
        'weight': '72',
        'position': 'D',
        'snc': 'Right',
        'gp': '6',
        'goals': '0',
        'assists': '0',
        'pim': '0',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {   
        'id': 'Karim',
        'image': 'ppic/karim.jpeg',
        'name': 'Raja Karim Adli',
        'team': 'Leeds Gryphons',
        'nt': 'U20,Mens',
        'age': '21',
        'height': '183',
        'weight': '72',
        'position': 'D',
        'snc': 'Right',
        'gp': '63',
        'goals': '26',
        'assists': '24',
        'pim': '40',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
    {
        'id': 'Sam',
        'image': 'ppic/adam_sam.jpeg',
        'name': 'Adam Sam Wan Abdullah', 
        'team': 'Outlaws',
        'nt': 'U15,U18,U20',
        'age': '18',
        'height': '175',
        'weight': '63',
        'position': 'W',
        'snc': 'Right',
        'gp': '17',
        'goals': '6',
        'assists': '6',
        'pim': '8',
        'gaa': '0',
        'svs': '0',
        'svp': '0'
    },
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

