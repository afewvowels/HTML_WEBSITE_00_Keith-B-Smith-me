CREATE TABLE kbs_blog_posts (
  blog_post_id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
  post_title VARCHAR(80) NOT NULL,
  post_content MEDIUMTEXT NOT NULL,
  post_image VARCHAR(90) NOT NULL,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(blog_post_id)
)ENGINE = InnoDB;

CREATE TABLE kbs_code_examples (
  code_example_id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
  code_title VARCHAR(80) NOT NULL,
  code_description MEDIUMTEXT NOT NULL,
  code_code MEDIUMTEXT NOT NULL,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(code_example_id)
)ENGINE = InnoDB;
