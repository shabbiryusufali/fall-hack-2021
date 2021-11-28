document.getElementById("cookie").onclick = cookieClicked;

var money = 1000;
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
    money = money + money_per_click;
    document.getElementById("money").innerHTML = "$" + money;
}

function upgrade_click(upgrade)
{
    if(upgrades[upgrade].cost <= money)
    {
        money -= upgrades[upgrade].cost;
        cookieClicked();
        money_per_click = money_per_click*1.6;
    }
    
}

function buyUpgrade(upgrade) {
    console.log("clicked");
    if (upgrades[upgrade].cost <= money) {
        money -= upgrades[upgrade].cost;
        cookieClicked();
        setInterval(() => { cookieClicked(); }, 1/upgrades[upgrade].CPS * 1000);
        upgrades[upgrade].cost = Math.round(upgrades[upgrade].cost*1.15);

        console.log(upgrades[upgrade].cost);
    } else {
        console.log("no money");
    }
}

document.getElementById("tuition").onclick = () => { upgrade_click(0); }
document.getElementById("upgrd_CMPT105W").onclick = () => { buyUpgrade(1); }
document.getElementById("upgrd_CMPT295").onclick = () => { buyUpgrade(2); }
document.getElementById("upgrd_CMPTCourses").onclick = () => { buyUpgrade(3); }
document.getElementById("upgrd_Student").onclick = () => { buyUpgrade(4); }
document.getElementById("upgrd_Instructor").onclick = () => { buyUpgrade(5); }
document.getElementById("upgrd_LowerCurve").onclick = () => { buyUpgrade(6); }
document.getElementById("upgrd_NewCampus").onclick = () => { buyUpgrade(7); }
document.getElementById("upgrd_DestroyUni").onclick = () => { buyUpgrade(8); }
document.getElementById("upgrd_onlySFU").onclick = () => { buyUpgrade(9); }