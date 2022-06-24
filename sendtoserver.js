/**
 * @Authors: Diego da Hora
 *           Alemnew Asrese
 *           Daniel Atkinson
 * @emails:  diego.hora@gmail.com
 *           alemnew.asrese@aalto.fi
 *           danatkhoo@gmail.com
 * @date:   2017-05-30
 */

function send(serverAddress, filename, obj){
    var xhr = new XMLHttpRequest();

    try {
        xhr.open("POST", serverAddress + "/" + filename, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(obj));
    } catch (e) {
        console.error('Upload server not reachable.');
    }
}
