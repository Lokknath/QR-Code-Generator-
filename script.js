const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
downloadBtn = wrapper.querySelector("button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrInput.value}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

downloadBtn.addEventListener("click", async() => {
    const response = await fetch(qrImg.src);
    const blob = await response.blob();
  const downloadLink = document.createElement("a");
    downloadLink.href= URL.createObjectURL(blob);
    downloadLink.download="qrcode.jpg";
    downloadLink.click();
    

});




