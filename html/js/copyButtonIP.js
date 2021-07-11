document.addEventListener("DOMContentLoaded", function(event) { 
    new ClipboardJS('.copy-ip');
    const copyIP = document.querySelector("#copybutton");
    let lever = 0;

    copyIP.addEventListener('click', () => {
      if (!lever)
      {
        copyIP.textContent = "Copied to clipboard!";
        lever = 1;
      }

      setTimeout(function(){ copyIP.textContent = "Copy IP"; lever = 0; }, 1000);
    })
})