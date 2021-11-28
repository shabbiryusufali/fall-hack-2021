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

upgrades += [new Upgrade("upgrd_admitStudent", 10, 0.1)];
upgrades += [new Upgrade("upgrd_hireInstructor", 1000, 10)];

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
    if (upgrades[upgrade].cost <= money) {
        money -= upgrades[upgrade].cost;
        cookieClicked();
        setTimeout(setInterval(() => { cookieClicked(); }, 1/upgrades[upgrade].CPS * 1000), 1/upgrades[upgrade].CPS * 1000);
        upgrades[upgrade].cost = Math.round(upgradeCosts[upgrade]*1.15);

        console.log(upgrades[upgrade].cost);
    }
}

document.getElementById("upgrd_admitStudent").onclick = () => { buyUpgrade(0); }
document.getElementById("upgrd_hireInstructor").onclick = () => { buyUpgrade(1); }