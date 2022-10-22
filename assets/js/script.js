function change() {
    const seats = document.getElementsByClassName("name")

    const people = [
        "강유찬",
        "권형우",
        "김루이",
        "김보영",
        "김성",
        "김예린",
        "김지혜",
        "김태양",
        "김현우",
        "박근령",
        "백헤빈",
        "양시인",
        "오세민",
        "이가희",
        "이동우",
        "이윤호",
        "이은효",
        "이지은",
        "이해솔",
        "임상욱",
        "정채원",
        "조현기",
        "차하영",
    ]
    shuffle(people)
    for(let i = 0;i!==23;i++) {
        seats[i].innerText = people[i]
    }
    console.log(people)
}

function inputPassword() {
    const password = "mh3-2"
    const input = document.getElementById("inputPassword")
    if(input.value === password) {
        window.open("https://mh32.blugon.kr/main.html")
    }
}

function shuffle(array) {
    array.sort(() => Math.random()-0.5)
}