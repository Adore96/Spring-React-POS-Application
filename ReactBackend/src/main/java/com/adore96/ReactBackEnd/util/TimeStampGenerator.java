package com.adore96.ReactBackEnd.util;/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;


@Service
public class TimeStampGenerator {

    private static final SimpleDateFormat sdf3 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public String getTimestamp() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        System.out.println(sdf3.format(timestamp));
        return sdf3.format(timestamp);
    }
}
