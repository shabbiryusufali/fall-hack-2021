var money = 0;
function inc() {
    money=money+1;
    counter.innerHTML = money;
}

function start_income()
{
    epic = setInterval(passive_income, 1000);
}

function passive_income()
{
    money = money + 1;
    counter.innerHTML = money;
}

