document.getElementById("cookie").onclick = cookieClicked;

var money = 1000;

var upgrades = new Array();

class Upgrade {
    constructor(name, cost, CPS) {
        this.name = name;
        this.cost = cost;
        this.CPS = CPS;
    }
}

upgrades.push(new Upgrade("upgrd_admitStudent", 10, 0.1));
upgrades.push(new Upgrade("upgrd_hireInstructor", 1000, 10));

// var upgradeCosts = new Object();
// upgradeCosts["upgrd_admitStudent"] = 10;
// upgradeCosts["upgrd_hireInstructor"] = 1000;

// const upgradeCps = new Object();
// upgradeCps["upgrd_admitStudent"] = 0.1;
// upgradeCps["upgrd_hireInstructor"] = 10;

function cookieClicked() {
    document.getElementById("money").innerHTML = "$" + ++money;
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

document.getElementById("upgrd_admitStudent").onclick = () => { buyUpgrade(0); }
document.getElementById("upgrd_hireInstructor").onclick = () => { buyUpgrade(1); }