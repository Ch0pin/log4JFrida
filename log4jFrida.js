Java.perform(function() {

console.log('\n-----Log4j check by Ch0pin-----------------');

try{
    var networkInterface = Java.use('java.net.NetworkInterface');
    var secureSettings = Java.use('android.provider.Settings$Secure');
    var contentResolver = Java.use('android.content.ContentResolver');
    var wifiInfo = Java.use('android.net.wifi.WifiInfo');
    var bluetoothAdapter = Java.use('android.bluetooth.BluetoothAdapter');
    var mediaDrm = Java.use('android.media.MediaDrm');
    var telephonyManager = Java.use('android.telephony.TelephonyManager');
    var build = Java.use('android.os.Build');
    var systemProperties = Java.use('android.os.SystemProperties');
    var buildProperties = Java.use('android.os.Build');

    //-----------------------------------------------
    buildProperties.MODEL.value="payload";
    buildProperties.DEVICE.value="payload";
    buildProperties.BOARD.value="payload";
    buildProperties.PRODUCT.value="payload";
    buildProperties.HARDWARE.value="payload";
    buildProperties.FINGERPRINT.value="payload"
    buildProperties.MANUFACTURER.value="payload";
    buildProperties.BOOTLOADER.value="payload";
    buildProperties.BRAND.value="payload";
    buildProperties.HOST.value="payload";
    buildProperties.ID.value="payload";
    buildProperties.DISPLAY.value="payload";
    buildProperties.TAGS.value="payload";
    buildProperties.SERIAL.value="payload";
    buildProperties.TYPE.value="payload";
    buildProperties.USER.value="payload";
    buildProperties.UNKNOWN.value="payload";

    //-----------------------------------------------

    var payl0ad = "payload"

    console.log("Payload: "+payl0ad);

    systemProperties.get.overload('java.lang.String').implementation = function(key){
        console.log('[+] Get system properties called using key: ' + key + ', returning '+payl0ad);
        return payl0ad;
        
    }

    build.getSerial.implementation = function(){
        colorLog('[+] Application is fetching the OS serial, returning ' + payl0ad,{c: Color.Green});
        return payl0ad;
    }

    telephonyManager.getLine1Number.overloads[0].implementation = function() {
        colorLog('[+] Application is fetching the phone number, returning '+payl0ad,{c: Color.Green});
        return payl0ad;
    }

    telephonyManager.getSubscriberId.overload().implementation = function(){
        console.log('[i] Application asks for device IMSI, returning:'+payl0ad);
        return payl0ad;
    }
    telephonyManager.getSubscriberId.overload('int').implementation = function(){
        console.log('[i] Application asks for device IMSI, returning ' + payl0ad);
        return payl0ad;
    }

    telephonyManager.getDeviceId.overloads[0].implementation = function(){
        console.log('[i] Application asks for device IMEI, returning'+payl0ad);
        return payl0ad;
    }
    telephonyManager.getDeviceId.overloads[1].implementation = function(slot){
        console.log('[i] Application asks for device IMEI, returning:'+payl0ad);
        return payl0ad;
    }

    telephonyManager.getImei.overloads[0].implementation = function(){
        console.log('[i] Application asks for device IMEI, returning :'+payl0ad);
        return payl0ad;
    }
    telephonyManager.getImei.overloads[1].implementation = function(slot){
        console.log('[i] Application asks for device IMEI, returning: '+payl0ad);
        return  payl0ad;
    }

    telephonyManager.getSimOperator.overload().implementation = function(){
        console.log('[+] getSimOperator call detected, returning:'+payl0ad);
        return payl0ad;
    }
    telephonyManager.getSimOperator.overload('int').implementation = function(sm){
        console.log('[+] getSimOperator call detected, returning:'+payl0ad);
        return payl0ad;
    }







    bluetoothAdapter.getAddress.implementation = function(){
        console.log("[+] Cloaking BT Mac Address, returning:"+payl0ad);
        return payl0ad;
    }


    wifiInfo.getMacAddress.implementation = function(){
        console.log("[+] Cloaking wifi Mac Address, returning:"+payl0ad);
        return payl0ad;

    }
    wifiInfo.getSSID.implementation = function(){
        console.log("[+] Cloaking SSID, returning:"+payl0ad);
        return payl0ad;

    }
    wifiInfo.getBSSID.implementation = function(){
        console.log("[+] Cloaking Router Mac Address, returning:"+payl0ad);
        return payl0ad;

    }


    contentResolver.query.overload('android.net.Uri', '[Ljava.lang.String;', 'android.os.Bundle', 'android.os.CancellationSignal').implementation = function(uri,str,bundle,sig){
        if(uri == 'content://com.google.android.gsf.gservicesa')
        {
            console.log('[+] Cloaking Google Services Framework Identifier Query, returning null');
            return null;
        }
        else 
            return payl0ad;


    }

    contentResolver.query.overload('android.net.Uri', '[Ljava.lang.String;', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String').implementation = function(uri,astr,bstr,cstr,dstr){
        if(uri == 'content://com.google.android.gsf.gservicesa')
        {
            console.log('[+] Cloaking Google Services Framework Identifier Query, returning null');
            return null;
        }
        else
            return getApplicationContext.getContentResolver.query(uri,astr,bstr,cstr,dstr);

    }

    contentResolver.query.overload('android.net.Uri', '[Ljava.lang.String;', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', 'android.os.CancellationSignal').implementation = function(uri,astr,bstr,cstr,sig){
        if(uri == 'content://com.google.android.gsf.gservicesa')
        {
            console.log('[+] Cloaking Google Services Framework Identifier Query, returning null');
            return null;
        }
        else 
            return payl0ad;

    }

    secureSettings.getString.implementation = function(contentresolver, query){
        console.log('[+] Cloaking Android ID, returning dummy value:'+payl0ad);
        if (query == 'android_id')
            return payl0ad;
        else
            return this.getString(contentresolver,query);
    }
}
catch(error){
    console.log(error)
}

});