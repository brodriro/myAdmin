package com.myadmin;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Random;

/**
 * Created by developer on 4/12/18.
 */

public class getConfigModule  extends ReactContextBaseJavaModule{
    Context mContext;


    public getConfigModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "getConfig";
    }

    @ReactMethod
    public void getTheme(Callback successCallBack){
        try {
            String[] array = {"indigo", "red", "orange", "amber"};
            String randomStr = array[new Random().nextInt(array.length)];

            successCallBack.invoke(randomStr);
        } catch (Exception e) {
            Toast.makeText(mContext, "Unable to fetch shared preference", Toast.LENGTH_LONG).show();
        }
    }
}
