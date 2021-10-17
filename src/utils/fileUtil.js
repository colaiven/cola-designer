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
export {fileDownload}
