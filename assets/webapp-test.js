/*
For more details, go to the following URLs
- luna-send commands: https://www.webosose.org/docs/reference/ls2-api/com-webos-service-applicationmanager/
- WebOSServiceBridge API: https://www.webosose.org/docs/reference/webosservicebridge-api/webosservicebridge-api-reference/
*/
function openApp(){
    var bridge = new WebOSServiceBridge();

    var url = 'luna://com.webos.service.applicationmanager/launch';
    var params = '{ "id":"com.webos.app.test.youtube", "params": {"displayAffinity": 1}}';

    bridge.call(url, params);
}

function closeApp(){
    var bridge = new WebOSServiceBridge();

    var url = 'luna://com.webos.service.applicationmanager/close';
    var params = '{ "id":"com.webos.app.test.youtube" }';

    bridge.call(url, params);
}