document.getElementById("rentSelect").addEventListener("change", function () {
    if (this.value === "custom") {
        document.getElementById("rentCustom").style.display = "block";
    } else {
        document.getElementById("rentCustom").style.display = "none";
    }
});

function formatDate(dateStr) {
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    return new Date(dateStr).toLocaleDateString("en-IN", options);
}

function generateInvoice() {
    const tenant = document.getElementById("tenantName").value;
    const flat = document.getElementById("flatNo").value;
    const rent =
        document.getElementById("rentSelect").value === "custom"
            ? parseFloat(document.getElementById("rentCustom").value)
            : parseFloat(document.getElementById("rentSelect").value);
    const prevMeter = parseFloat(document.getElementById("prevMeter").value);
    const currMeter = parseFloat(document.getElementById("currMeter").value);
    const units = currMeter - prevMeter;
    const electricity = units * 8;
    const dues = parseFloat(document.getElementById("dues").value) || 0;
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;
    const upiId = document.getElementById("upiId").value;
    const note = document.getElementById("tenantNote").value;

    const subtotal = rent + electricity;
    const total = subtotal + dues;

    document.getElementById("invoiceDate").innerText = formatDate(new Date());
    document.getElementById("rTenant").innerText = tenant;
    document.getElementById("rFlat").innerText = flat;
    document.getElementById("rPeriod").innerText = `${formatDate(
        fromDate
    )} To ${formatDate(toDate)}`;
    document.getElementById("rRent").innerText = rent.toFixed(2);
    document.getElementById("rPrevMeter").innerText = prevMeter;
    document.getElementById("rCurrMeter").innerText = currMeter;
    document.getElementById("rUnits").innerText = units;
    document.getElementById("rElec").innerText = electricity.toFixed(2);
    document.getElementById("rDues").innerText = dues.toFixed(2);
    document.getElementById("rSubtotal").innerText = subtotal.toFixed(2);
    document.getElementById("rTotal").innerText = "₹" + total.toFixed(2);

    if (note.trim() === "") {
        document.getElementById("noteSection").style.display = "none";
    } else {
        document.getElementById("noteSection").style.display = "block";
        document.getElementById("rNote").innerText = note;
    }

    document.getElementById("qrCode").innerHTML = "";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
        tenant
    )}&am=${total.toFixed(2)}&cu=INR`;
    new QRious({
        element: document.getElementById("qrCode"),
        value: upiLink,
        size: 180,
    });

    document.getElementById("invoice").style.display = "block";
}

async function downloadImage() {
    const invoice = document.getElementById("invoice");
    const canvas = await html2canvas(invoice);
    const link = document.createElement("a");
    link.download = "renter.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
