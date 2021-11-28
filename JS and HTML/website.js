document.getElementById("cookie").onclick = cookieClicked;

var money = 1000;

var upgradeCosts = new Object();
upgradeCosts["upgrd_admitStudent"] = 10;
upgradeCosts["upgrd_hireInstructor"] = 1000;

const upgradeCps = new Object();
upgradeCps["upgrd_admitStudent"] = 0.1;
upgradeCps["upgrd_hireInstructor"] = 10;

function cookieClicked() {
    document.getElementById("money").innerHTML = "$" + ++money;
}

function buyUpgrade(upgrade) {
    console.log("asddas");
    if (upgradeCosts[upgrade] <= money) {
        money -= upgradeCosts[upgrade];
        document.getElementById("money").innerHTML = "$" + ++money;
        setInterval(() => { money++; document.getElementById("money").innerHTML = "$" + ++money; }, 1/upgradeCps[upgrade] * 1000);
        upgradeCosts[upgrade] *= 1.15;
    }
}

document.getElementById("upgrd_admitStudent").onclick = () => { buyUpgrade("upgrd_admitStudent"); }
document.getElementById("upgrd_hireInstructor").onclick = () => { buyUpgrade("upgrd_hireInstructor"); }