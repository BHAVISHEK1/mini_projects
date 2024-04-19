
        function calculateEMI() {
            var loanAmount = parseFloat(document.getElementById("loanAmount").value);
            var loanTerm = parseFloat(document.getElementById("loanTerm").value);
            var interestRate = parseFloat(document.getElementById("interestRate").value);

            if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(interestRate)) {
                alert("Please enter valid numbers for all fields.");
                return;
            }

            var monthlyInterest = interestRate / 100 / 12;
            var totalPayments = loanTerm;
            
            var emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments)) /
                    (Math.pow(1 + monthlyInterest, totalPayments) - 1);

            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "EMI: ₹" + emi.toFixed(2);
        }
    