package com.example.demo5;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
/* <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.33</version>
        </dependency>

 */

public class database {
    private final String url="jdbc:mysql://localhost:3306/booklist";
    private final String user="root";
    private final String password="abdullah";
    public static Connection connection;
    private static database instace=new database();
    database() {
        try {
            connection= DriverManager.getConnection(url,user,password);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }
    public static Connection getConnection(){
        return connection;
    }

}
