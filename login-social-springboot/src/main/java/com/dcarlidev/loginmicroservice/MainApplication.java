/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dcarlidev.loginmicroservice;

import com.dcarlidev.loginmicroservice.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 *
 * @author carlos
 */
@SpringBootApplication
@EnableConfigurationProperties(value = AppProperties.class)
public class MainApplication {

    public static void main(String... args) {
        SpringApplication.run(MainApplication.class, args);
    }

}
