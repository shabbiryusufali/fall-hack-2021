document.getElementById("cookie").onclick = cookieClicked;

<<<<<<< HEAD
var money = 1000000000;
=======
var money = 1000000;
>>>>>>> a7edc7a0a2689303bad0c9a9f954dc65ca997f40
var clicks_per_sec = 0;
var upgrades = new Array();
var money_per_click = 1;

class Upgrade {
    constructor(name, cost, CPS) {
        this.name = name;
        this.cost = cost;
        this.CPS = CPS;
    }
}

upgrades.push(new Upgrade("tution", 250, 0)); 

upgrades.push(new Upgrade("upgrd_CMPT105W", 20, 0.1));
upgrades.push(new Upgrade("upgrd_CMPT295", 900, 5));
upgrades.push(new Upgrade("upgrd_CMPTCourses", 3850, 10));
upgrades.push(new Upgrade("upgrd_Student", 6600, 25));
upgrades.push(new Upgrade("upgrd_Instructor", 15945, 35));
upgrades.push(new Upgrade("upgrd_LowerCurve", 24000, 60));
upgrades.push(new Upgrade("upgrd_NewCampus", 44757, 100));
upgrades.push(new Upgrade("upgrd_DestroyUni", 69420, 150));
upgrades.push(new Upgrade("upgrd_onlySFU", 69420666, 100000000000000000000000000000000000));

function cookieClicked() {
    money = Math.round(money + money_per_click);
    document.getElementById("money").innerHTML = "$" + money;
}

function upgrade_click(upgrade)
{
    if(upgrades[upgrade].cost <= money)
    {
<<<<<<< HEAD
        money -= upgrades[upgrade].cost;
        cookieClicked();
=======
        money =  money - upgrades[upgrade].cost;
        upgrades[upgrade].cost = Math.round(upgrades[upgrade].cost*1.15);
        money = Math.round(money);
        document.getElementById("money").innerHTML = "$" + money;
>>>>>>> a7edc7a0a2689303bad0c9a9f954dc65ca997f40
        money_per_click = money_per_click*1.3;
    }
}

function buyUpgrade(upgrade) {
    console.log("clicked");
    if (upgrades[upgrade].cost <= money) {
        money -= upgrades[upgrade].cost;
<<<<<<< HEAD
        cookieClicked();
        setInterval(() => { cookieClicked(); }, 1/upgrades[upgrade].CPS * 1000);
        upgrades[upgrade].cost = Math.round(upgrades[upgrade].cost*1.6);
=======
        setInterval(() => { money++; money = Math.round(money); document.getElementById("money").innerHTML = "$" + money;}, 1/upgrades[upgrade].CPS * 1000);
        upgrades[upgrade].cost = Math.round(upgrades[upgrade].cost*1.15);
>>>>>>> a7edc7a0a2689303bad0c9a9f954dc65ca997f40

        console.log(upgrades[upgrade].cost);
    } else {
        console.log("no money");
    }
}

document.getElementById("tuition").onclick = () => { upgrade_click(0); document.getElementById("0").innerHTML = upgrades[0].cost}
document.getElementById("upgrd_CMPT105W").onclick = () => { buyUpgrade(1); document.getElementById("1").innerHTML = upgrades[1].cost}
document.getElementById("upgrd_CMPT295").onclick = () => { buyUpgrade(2); document.getElementById("2").innerHTML = upgrades[2].cost}
document.getElementById("upgrd_CMPTCourses").onclick = () => { buyUpgrade(3); document.getElementById("3").innerHTML = upgrades[3].cost}
document.getElementById("upgrd_Student").onclick = () => { buyUpgrade(4); document.getElementById("4").innerHTML = upgrades[4].cost}
document.getElementById("upgrd_Instructor").onclick = () => { buyUpgrade(5); document.getElementById("5").innerHTML = upgrades[5].cost}
document.getElementById("upgrd_LowerCurve").onclick = () => { buyUpgrade(6); document.getElementById("6").innerHTML = upgrades[6].cost}
document.getElementById("upgrd_NewCampus").onclick = () => { buyUpgrade(7); document.getElementById("7").innerHTML = upgrades[7].cost}
document.getElementById("upgrd_DestroyUni").onclick = () => { buyUpgrade(8); document.getElementById("8").innerHTML = upgrades[8].cost}
document.getElementById("upgrd_onlySFU").onclick = () => { buyUpgrade(9); document.getElementById("9").innerHTML = upgrades[9].cost}