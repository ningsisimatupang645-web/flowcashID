let data = [];

function loadData() {
    const saved = localStorage.getItem("flowcash");
    if (saved) {
        data = JSON.parse(saved);
        renderTable();
    }
}

function saveData() {
    localStorage.setItem("flowcash", JSON.stringify(data));
}

function tambahTransaksi() {
    const ket = document.getElementById("keterangan").value;
    const jumlah = document.getElementById("jumlah").value;
    const tipe = document.getElementById("tipe").value;

    if (!ket || !jumlah) {
        alert("Isi semua form!");
        return;
    }

    data.push({ keterangan: ket, jumlah: Number(jumlah), tipe: tipe });

    saveData();
    renderTable();

    document.getElementById("keterangan").value = "";
    document.getElementById("jumlah").value = "";
}

function renderTable() {
    const tbody = document.querySelector("#tabel tbody");
    tbody.innerHTML = "";

    data.forEach(item => {
        const row = `
            <tr>
                <td>${item.keterangan}</td>
                <td>${item.jumlah}</td>
                <td>${item.tipe}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

loadData();
