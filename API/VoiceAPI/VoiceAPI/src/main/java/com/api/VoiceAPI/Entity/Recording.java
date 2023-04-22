package com.api.VoiceAPI.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "recordings")
public class Recording {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column(nullable = false)
  private String filename;

  @Lob
  private byte[] content;


  public Recording(long id, String filename, byte[] content) {
    this.id = id;
    this.filename = filename;
    this.content = content;
  }

  public Recording() {
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getFilename() {
    return filename;
  }

  public void setFilename(String filename) {
    this.filename = filename;
  }

  public byte[] getContent() {
    return content;
  }

  public void setContent(byte[] content) {
    this.content = content;
  }
}
