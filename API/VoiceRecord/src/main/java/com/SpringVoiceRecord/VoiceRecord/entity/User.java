package com.SpringVoiceRecord.VoiceRecord.entity;


import jakarta.persistence.*;



@Entity
@Table(name = "user")
public class User  {

    @Id
    @Column(name = "user_id", length = 50)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;

    @Column(name = "user_name", length = 50)
    private String name;

    @Column(name = "user_username", length = 50)
    private String username;

    @Column(name = "user_password", length = 50)
    private String password;

    @Column(name = "user_email", length = 50)
    private String email;

    @Column(name = "tel")
    private int tel;

    public User(int userid, String name, String username, String password, String email, int tel) {
        this.userid = userid;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.tel = tel;
    }

    public User(String name, String username, String password, String email, int tel) {
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getTel() {
        return tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "userid=" + userid +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", tel=" + tel +
                '}';
    }
}
