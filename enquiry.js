document.addEventListener("DOMContentLoaded",()=>{
    const enquiryForm = document.getElementById("enquiryForm");
    if(enquiryForm){
        enquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            if(!name||!email||!service){
                alert("Please fill in all required fields.");
                return;
            }
            let responseText = "";
            switch (service){
                case "furniture set":
                    responseText = `Thank you ${name} for enquiring with us! A Tusk member will contact you shortly. `;
                    break;
            }
            document.getElementById("enquiryResponse").textContent = responseText;
        })
    }
})