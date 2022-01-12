import axios from 'axios'

const loadFile = async function (path) {
    let text;
    await axios.get(path).then(res => {
        text = res;
    })
    return text
}

/**
 *  文件下载
 * @param downloadUrl   文件
 * @param fileName      文件名
 */
const fileDownload = function (downloadUrl,fileName) {
    let aLink = document.createElement("a");
    aLink.style.display = "none";
    aLink.href = downloadUrl;
    aLink.download = fileName;
    document.body.appendChild(aLink);
    aLink.click();
    document.body.removeChild(aLink);
}

const base64toFile = function (base64, fileName) {
    let arr = base64.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName,{ type: mime });
}
export {fileDownload, base64toFile, loadFile}
