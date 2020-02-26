
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
	`id` int(11) NOT NULL  AUTO_INCREMENT COMMENT '主键',
	`title` VARCHAR(120) NOT NULL COMMIT '文章标题',
	`content` TEXT NOT NULL COMMENT '文章内容',
	`status` TINYINT(3) NOT NULL DEFAULT 0 COMMENT '0：草稿箱 1：发布',
	`create_at` TIMESTAMP NOT NULL COMMENT 'create time',
	`update_at` TIMESTAMP NOT NULL COMMENT 'modify time',
	PRIMARY KEY (id)
)ENGINE INNODB DEFAULT CHARSET=utf8 COMMENT '文章表';

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
	`id` INT(11) NOT NULL AUTO_INCREMENT ,
	`name` VARCHAR(120) NOT NULL COMMENT '类别名称',
	`create_at` TIMESTAMP NOT NULL COMMENT 'create time',
	`update_at` TIMESTAMP NOT NULL COMMENT 'modify time',
)
