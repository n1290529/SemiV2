window.addEventListener('load', function () {
    const inpFile = document.getElementById("inpFile");
    const previewContainer = document.getElementsByClassName("image-preview_image")[0];
    inpFile.addEventListener("change", function () {
        const file = this.files[0];
        const reader = new FileReader();
        const imgReader = new Image();
        reader.onloadend = () => {
            imgReader.onload = () => {
                const imgType = imgReader.src.substring(5, imgReader.src.indexOf(';'));
                previewContainer.src = imgReader.src;//インプット画像確認
            }
            imgReader.src = reader.result;
        }
        reader.readAsDataURL(file);
    });
});