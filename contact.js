function process() {
    var person = document.getElementById("nameBox").value;
    var Tickets = parseInt(document.getElementById("TicketBox").value);
  
    var Price = parseInt(document.getElementById("PriceBox").value);
  
  
    if (Tickets * Price > 50000) {
  
      document.getElementById("content").innerHTML =
  
        `<h4> Dear ${person}, You will get 20% Discount.Fly safe!. <h4>`;
    }
  
    else if (Tickets * Price > 20000) {
  
      document.getElementById("content").innerHTML =
  
        `<h4>Dear ${person}, You will get 10% Discount.Fly safe!. <h4>`;
    }
  
    else if (Tickets * Price > 10000) {
  
      document.getElementById("content").innerHTML =
  
        `<h4>Hello ${person}, You will get 5% discount .Fly safe.  <h4>`;
    }
  
    else {
      document.getElementById("content").innerHTML =
  
        `<h4> Sorry ${person}, No Discount this time. </h4>`;
    }
  }