var call_form_ = document.querySelector("#formContainer form");
var call_formData = new FormData(call_form_);
var call_params = "";

let call_trigger = async (url, data) => {
  console.log(url, data);
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data, // body data type must match "Content-Type" header
  });

  return response; // parses JSON response into native JavaScript objects
};

call_form_.addEventListener("submit", (e) => {
  e.preventDefault();

  

  for (var [key, value] of call_formData.entries()) {
    console.log(key, " = ", value);
    call_params += `${key}=${
      document.querySelector("*[name=" + key + "] ").value
    }&`;
  }
  console.log("this is the data retreived", call_params);
  call_trigger(
    "https://hooks.airtable.com/workflows/v1/genericWebhook/appEjZzbuEeVfNfPU/wflu9ev6VhAEb6yoe/wtrjcYQ0xrctBvz8y",
    call_params
  ).then((data) => {
    alert("You Have Successfully Signed Up!");
    console.log(data);
  });
  call_form_.reset();
});
document.querySelector(".btn").addEventListener("click", () => {
  setTimeout(() => {
    call_form_.reset();
    location.reload();
  }, 5000);
});