/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : wyyx

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-09-07 20:12:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `pro`
-- ----------------------------
DROP TABLE IF EXISTS `pro`;
CREATE TABLE `pro` (
  `id` int(11) NOT NULL auto_increment,
  `proName` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `yprice` float default NULL,
  `xprice` float NOT NULL,
  `img` varchar(255) default NULL,
  `shops` varchar(255) default NULL,
  `repertory` int(11) NOT NULL,
  `allRepertory` int(11) default NULL,
  `type` varchar(255) default NULL,
  `discount` double default NULL,
  `kind` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pro
-- ----------------------------
INSERT INTO `pro` VALUES ('1', '网易有道翻译王 2.0', '', null, '1688', '/img/index/621362a91fcab80a55eb4685649ccb5f.png,/img/index/1052f693fa0b062b3259bdf9be758356.png', null, '0', null, null, null, 'xp');
INSERT INTO `pro` VALUES ('2', '男士优质小牛皮手工正装鞋', '', null, '659', '/img/index/86013f5b233479d29ee5b8c725b4c8ee.png,/img/index/43dbb888ae7cfc88bc3e4f2e1a218fa2.jpg', 'Coach制造商', '0', null, null, null, 'xp');
INSERT INTO `pro` VALUES ('3', '泰国制造 天然乳胶枕 护肩舒眠 升级抗菌', '', null, '199', '/img/index/5d5ac39fa2e4ba1f9edb2bb1cb469ddf.png,/img/index/c491f5bc7d1fc25f095abd482f2f6a96.jpg', '海外制造商', '0', null, null, null, 'xp');
INSERT INTO `pro` VALUES ('4', '日本制造 缤纷果味汽水 300毫升', '', null, '12.9', '/img/index/89449ebb60d9f933ec4f879eabb4c900.png,/img/index/ba34c63eef150de82ea0b26493dd6ed9.jpg', null, '0', null, null, null, 'xp');
INSERT INTO `pro` VALUES ('5', '24存 纯PC \"铝框\" （非全铝）拉杆箱', '', null, '339', '/img/index/021188f19de55d4e146dee96b9a0e104.png', null, '0', null, null, null, 'bjz');
INSERT INTO `pro` VALUES ('6', '超柔弹力懒人沙发', '', '349', '279', 'img/index/fda4a7b5f14061e177228af4cb51333f.png', null, '0', null, null, null, 'bjtj');
INSERT INTO `pro` VALUES ('7', '多功能人体工学转椅', '', '1399', '1199', '/img/index/7880da24e96f6e18916b16d0f1482369.png', null, '0', null, null, null, 'bjtj');
INSERT INTO `pro` VALUES ('8', '男士丝光棉轻商务V领T恤', '', '129', '29.9', '/img/index/9bb744773170b03f736b2eaa992184c8.png', null, '0', null, null, null, 'bjtj');
INSERT INTO `pro` VALUES ('9', '浓缩即食燕窝 70克*3瓶 99%', '', null, '328', 'img/index/b532f2f441572242333f6c5b92fc9f10.png', null, '0', null, null, null, 'bjtj');
INSERT INTO `pro` VALUES ('10', '日式水洗棉格四件套', '', '299', '149.5', '/img/index/1d212b1fe2c13006c7b8fc011c787d55.jpg', null, '0', null, null, null, 'bjtj');
INSERT INTO `pro` VALUES ('11', '日式和风声波式电动牙刷', '', null, '123', '/img/index/e5474a8f4fd5748079e2ba2ead806b51.png', null, '0', null, null, null, 'bjtj');
