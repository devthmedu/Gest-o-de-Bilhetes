document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var seat = document.getElementById("seat").value;
    var date = document.getElementById("date").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    var ticketId = "T" + Math.floor(Math.random() * 10000);

    var tableBody = document.getElementById("history-table-body");
    var newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${ticketId}</td>
        <td>${name}</td>
        <td>${seat}</td>
        <td>${date}</td>
        <td>${from}</td>
        <td>${to}</td>
        <td>Booked</td>
        <td><button class='delete-btn' data-ticket-id='${ticketId}'>Delete</button></td>
    `;

    alert(`Ticket with ID ${ticketId} has been booked successfully.`);
    document.getElementById("ticket-form").reset();
    document.getElementById("ticket-history").classList.add("show");
});

document.getElementById("view-history-btn").addEventListener("click", function() {
    var ticketHistory = document.getElementById("ticket-history");
    ticketHistory.classList.toggle("show");
    if (ticketHistory.classList.contains("show")) {
        ticketHistory.style.display = "block";
    } else {
        ticketHistory.style.display = "none";
    }
});

document.getElementById("ticket-history").addEventListener("click", function(event) {
    if (event.target.classList.contains('delete-btn')) {
        var ticketIdToDelete = event.target.getAttribute('data-ticket-id');
        event.target.closest('tr').remove();
        alert(`Ticket with ID ${ticketIdToDelete} has been deleted.`);
    }
});
