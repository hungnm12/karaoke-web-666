package com.SpringVoiceRecord.VoiceRecord.DTO;

public class UserSaveDTO {




    private String name;


    private String username;


    private String password;


    private String email;


    private int tel;

    public UserSaveDTO( String name, String username, String password, String email, int tel) {

        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.tel = tel;
    }

    public UserSaveDTO() {
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

                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", tel=" + tel +
                '}';
    }
}

