function placeOrder() {
    if (document.getElementById("name").value=="") {
        alert("I'm sorry you must provide your name before submiting an order.");
    }
    else if (document.getElementById("minute").value=="") {
        alert("I'm sorry you need proovide the minute.");
    }
    else {
        form.submit();
    }
}
function updateOrder() {
    const TAXRATE=0.0925;
    const DONUTSPRICE=0.50;
    var numCakeDonuts=parseDonuts(document.getElementById("cakedonuts").value);
    var numGlazedDonuts=parseDonuts(document.getElementById("glazeddonuts").value);
    if (isNaN(numCakeDonuts)) {
        numCakeDonuts=0;
    }
    if (isNaN(numGlazedDonuts)) {
        numGlazedDonuts=0;
    }
    var subTotal=(numGlazedDonuts+numCakeDonuts)*DONUTSPRICE;
    var tax=subTotal*TAXRATE;
    var total=subTotal+tax;
    document.getElementById("subTotal").value="$"+subTotal.toFixed(2);
    document.getElementById("tax").value="$"+tax.toFixed(2);
    document.getElementById("total").value="$"+total.toFixed(2);

}
function parseDonuts(donutsString) {
        numDonuts=parseInt(donutsString);
        if (donutsString.indexOf("dozen")!=-1) {
            numDonuts=12*numDonuts;
        }
        return numDonuts;
}
