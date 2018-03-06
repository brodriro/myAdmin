package com.myadmin;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by root on 3/6/18.
 */

public class ScannerModule  extends ReactContextBaseJavaModule{
    public ScannerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ScannerModule";
    }

    @ReactMethod
    public String getMemory() {
        return "OK";
    }
}
