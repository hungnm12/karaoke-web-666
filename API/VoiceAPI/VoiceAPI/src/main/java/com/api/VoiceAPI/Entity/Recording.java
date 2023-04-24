package com.api.VoiceAPI.Entity;


import jakarta.persistence.*;

@Entity
@Table(name = "recordings")
public class Recording {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String format;

  @Column(nullable = false)
  private Long duration;

  public Recording(long id, String name, String format, Long duration) {
    this.id = id;
    this.name = name;
    this.format = format;
    this.duration = duration;
  }

  public Recording() {
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getFormat() {
    return format;
  }

  public void setFormat(String format) {
    this.format = format;
  }

  public Long getDuration() {
    return duration;
  }

  public void setDuration(Long duration) {
    this.duration = duration;
  }
}
