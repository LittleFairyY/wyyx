/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : wyyx

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-09-14 14:15:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `car`
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(11) NOT NULL auto_increment,
  `userId` int(11) default NULL,
  `img` varchar(255) default NULL,
  `onePrice` float(255,0) default NULL,
  `num` int(11) default NULL,
  `proId` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('25', '9', '/img/detail/p1.png', '659', '8', '2');
INSERT INTO `car` VALUES ('26', '9', '/img/detail/s1.jpg', '339', '4', '5');
INSERT INTO `car` VALUES ('27', '9', '/img/detail/m1.jpg', '45', '2', '8');

-- ----------------------------
-- Table structure for `nav`
-- ----------------------------
DROP TABLE IF EXISTS `nav`;
CREATE TABLE `nav` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `navName` varchar(255) default NULL,
  `childId` int(11) default NULL,
  `img` varchar(255) default NULL,
  `description` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nav
-- ----------------------------
INSERT INTO `nav` VALUES ('1', '首页', '0', null, null);
INSERT INTO `nav` VALUES ('2', '居家', '0', null, null);
INSERT INTO `nav` VALUES ('7', '床品件套', '2', '/img/index/cpjt.png', 'MUJI等品牌制造商出品');
INSERT INTO `nav` VALUES ('8', '被枕', '2', '/img/index/zx.png', '守护你的睡眠时光');
INSERT INTO `nav` VALUES ('9', '家具', '2', '/img/index/jz.png', '大师级工艺');
INSERT INTO `nav` VALUES ('10', '灯具', '2', '/img/index/dj.png', '一盏灯，温暖一个家');
INSERT INTO `nav` VALUES ('11', '家饰', '2', '/img/index/1bd51b940ede5b0a975a36d20f9c12de.png', '装饰你的家');
INSERT INTO `nav` VALUES ('12', '晾晒除味', '2', '/img/index/73b7fa444f9dd370d396dd9cd03aa7f6.png', '居家晾晒必备好物');
INSERT INTO `nav` VALUES ('13', '旅行用品', '2', '/img/index/f3cb3a8619734ea6d0ba674e084f6477.png', '出行小物，贴心相伴');
INSERT INTO `nav` VALUES ('14', '鞋包配饰', '0', null, null);
INSERT INTO `nav` VALUES ('15', '服装', '0', null, null);
INSERT INTO `nav` VALUES ('16', '电器', '0', null, null);
INSERT INTO `nav` VALUES ('17', '洗护', '0', null, null);
INSERT INTO `nav` VALUES ('18', '饮食', '0', null, null);
INSERT INTO `nav` VALUES ('19', '餐厨', '0', null, null);
INSERT INTO `nav` VALUES ('20', '婴童', '0', null, null);
INSERT INTO `nav` VALUES ('21', '文体', '0', null, null);
INSERT INTO `nav` VALUES ('22', '特色区', '0', null, null);
INSERT INTO `nav` VALUES ('23', '为你严选', '0', null, null);
INSERT INTO `nav` VALUES ('24', '众筹', '0', null, null);
INSERT INTO `nav` VALUES ('25', '收纳', '2', '/img/index/sn.png', '选自古驰竹柄原料供应商');
INSERT INTO `nav` VALUES ('26', '男鞋', '14', '/img/index/c1052ec10b350e7612cb9226a60cdfd5.png', '匠心打造，轻潮舒适');
INSERT INTO `nav` VALUES ('27', '布艺软装', '2', '/img/index/f57994dcda1e459f69a6d3a092aebe7d.png', '各种风格软装装点你的家');
INSERT INTO `nav` VALUES ('28', '女鞋', '14', '/img/index/4ab4b4ff0bce6236a46c13f28823736d.png', '给你行走的力量');
INSERT INTO `nav` VALUES ('29', '行李箱', '14', '/img/index/c334fe053304b63f9cdcf88b7d16b948.png', '带着梦想即刻出发');
INSERT INTO `nav` VALUES ('30', '女式包袋', '14', '/img/index/32781d3bce89750f6a54b09b89336b68.png', '包里装着你的整个世界');
INSERT INTO `nav` VALUES ('31', '韩国馆', '22', '/img/index/3b4cf5ae851e82e431509355dc79906a.png', '韩国制造精巧好物');
INSERT INTO `nav` VALUES ('32', '日本馆', '22', '/img/index/8f2e45b9b5ba4838a328d76f9320533b.png', '我的世界\r\n\r\n日本制造家居好物');
INSERT INTO `nav` VALUES ('33', '厨房配件', '19', '/img/index/dac95eb1575480389fff59474a4126c6.png', '下厨省力小帮手');
INSERT INTO `nav` VALUES ('34', '个护健康', '16', '/img/index/c2d361558787181260924e8425447191.png', '个人护理，省心生活');
INSERT INTO `nav` VALUES ('35', '家庭清洁', '17', '/img/index/4d953a47df5b6ceeba0256f1aa082603.png', '洁净才能带来清爽心情');
INSERT INTO `nav` VALUES ('36', '拖鞋', '14', '/img/index/9173b2d0bbcc9b9d57449e1b68bbb003.png', '慵懒休闲时光，轻松惬意生活');
INSERT INTO `nav` VALUES ('37', '小食糖巧', '18', '/img/index/b1a09cf8fef5d4ab08aba526cc44b46b.png', '原香鲜材，以小食之味，带来味蕾惊喜');
INSERT INTO `nav` VALUES ('38', '东南亚馆', '22', '/img/index/0fbf7fe376918ddae5db6925ab423167.png', '东南亚特色好物');
INSERT INTO `nav` VALUES ('39', '运动', '15', '/img/index/f23b374777d201b88d58dee17d824ac0.png', '运动休闲多场景任意切换');
INSERT INTO `nav` VALUES ('40', '坚果炒货', '18', '/img/index/9908928554085b1d3b3e069ff91789c5.png', '精选原产地，美味加营养');
INSERT INTO `nav` VALUES ('41', '我的世界', '21', '/img/index/da0ac345e98c04594b697b56ebc373a5.png', '我的世界游戏周边');
INSERT INTO `nav` VALUES ('42', '锅具', '19', '/img/index/f6b1744e2790b7aaeab6c4c2ffd16a71.png', '一口好锅，炖煮生活一日三餐');
INSERT INTO `nav` VALUES ('43', '数码', '16', '/img/index/2c1f794e57ec0d67be0e71a04f83325c.png', '智能硬件，匠心出品');
INSERT INTO `nav` VALUES ('44', '滋补食材', '18', '/img/index/153de62229e4ec53b793ad1b5232cc73.png', '营养滋补，只为健康');

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
  `bigimg` varchar(255) default NULL,
  `smallimg` varchar(255) default NULL,
  `points` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pro
-- ----------------------------
INSERT INTO `pro` VALUES ('1', '网易有道翻译王 2.0', '', null, '1688', '/img/index/621362a91fcab80a55eb4685649ccb5f.png,/img/index/1052f693fa0b062b3259bdf9be758356.png', null, '0', null, '43', null, 'xp', '/img/index/ww1.jpg,/img/index/ww2.jpg,/img/index/ww3.jpg,/img/index/ww4.jpg,/img/index/ww5.jpg', '/img/index/w1.jpg,/img/index/w2.jpg,/img/index/w3.jpg,/img/index/w4.jpg,/img/index/w5.jpg', '购买最高得168积分');
INSERT INTO `pro` VALUES ('2', '男士优质小牛皮手工正装鞋', '精挑手工慢做，典雅大气', null, '659', '/img/index/xz1.png,/img/index/xz2.jpg', 'Coach制造商', '0', null, '26', null, 'xp', '/img/detail/pp1.jpg,/img/detail/pp2.jpg,/img/detail/pp3.jpg,/img/detail/pp4.jpg,/img\\detail/pp5.jpg', '/img/detail/p1.png,/img/detail/p2.jpg,/img/detail/p3.jpg,/img/detail/p4.jpg,/img\\detail/p5.jpg', '购买最高得65积分');
INSERT INTO `pro` VALUES ('3', '泰国制造 天然乳胶枕 护肩舒眠 升级抗菌', '升级AAA抗菌 SGS全程监控', null, '199', '/img/index/5d5ac39fa2e4ba1f9edb2bb1cb469ddf.png,/img/index/c491f5bc7d1fc25f095abd482f2f6a96.jpg', '海外制造商', '0', null, '38', '0', 'xp', '/img/detail/yy1.jpg,/img/detail/yy2.jpg,/img/detail/yy3.jpg,/img/detail/yy4.jpg,/img/detail/yy5.jpg', '/img/detail/y1.jpg,/img/detail/y2.jpg,/img/detail/y3.jpg,/img/detail/y4.jpg,/img/detail/y5.jpg', '购买最高得65积分');
INSERT INTO `pro` VALUES ('4', '日本制造 缤纷果味汽水 300毫升', '酸甜交织，一口喝出夏日缤纷清爽', null, '12.9', '/img/index/89449ebb60d9f933ec4f879eabb4c900.png,/img/index/ba34c63eef150de82ea0b26493dd6ed9.jpg', '', '0', null, '32', null, 'xp', '/img/detail/111.jpg,/img/detail/222.jpg,/img/detail/333.jpg,/img/detail/444.jpg,/img/detail/555.jpg', '/img/detail/11.jpg,/img/detail/22.jpg,/img/detail/33.jpg,/img/detail/44.jpg,/img/detail/55.jpg', '购买最高得36积分');
INSERT INTO `pro` VALUES ('5', '24存 纯PC \"铝框\" （非全铝）拉杆箱', '71升容量升级 灵活出行', null, '339', '/img/index/021188f19de55d4e146dee96b9a0e104.png', '新秀丽制造商', '0', null, '29', null, 'bjz', '/img/detail/ss1.jpg,/img/detail/ss2.jpg,/img/detail/ss3.jpg,/img/detail/ss4.jpg,/img\\detail/ss5.jpg', '/img/detail/s1.jpg,/img/detail/s2.jpg,/img/detail/s3.jpg,/img/detail/s4.jpg,/img\\detail/s5.jpg', '购买最高得36积分');
INSERT INTO `pro` VALUES ('6', '超柔弹力懒人沙发', '软糯高弹，双层防漏，舒适自由组合', '349', '279', '/img/index/fda4a7b5f14061e177228af4cb51333f.png', null, '0', null, '27', null, 'bjtj', '/img/detail/uu1.jpg,/img/detail/uu2.jpg,/img/detail/uu3.jpg,/img/detail/uu4.jpg,/img/detail/uu5.jpg', '/img/detail/u1.jpg,/img/detail/u2.jpg,/img/detail/u3.jpg,/img/detail/u4.jpg,/img/detail/u5.jpg', '购买最高得34积分');
INSERT INTO `pro` VALUES ('7', '多功能人体工学转椅', '冈村椅制造商携手打造', '1399', '1199', '/img/index/7880da24e96f6e18916b16d0f1482369.png', null, '0', null, '9', null, 'bjtj', '/img/detail/qq1.jpg,/img/detail/qq2.jpg,/img/detail/qq3.jpg,/img/detail/qq4.jpg,/img/detail/qq5.jpg', '/img/detail/q1.jpg,/img/detail/q2.jpg,/img/detail/q3.jpg,/img/detail/q4.jpg,/img/detail/q5.jpg', '购买最高得34积分');
INSERT INTO `pro` VALUES ('8', '美国制造 除甲醛空气净化剂227g', '有效吸收甲醛、去除空间异味', '129', '45', '/img/index/kqjhq.png', null, '0', null, '35', null, 'bjtj', '/img/detail/mm1.jpg,/img/detail/mm2.jpg,/img/detail/mm3.jpg,/img/detail/mm4.jpg,/img/detail/mm5.jpg', '/img/detail/m1.jpg,/img/detail/m2.jpg,/img/detail/m3.jpg,/img/detail/m4.jpg,/img/detail/m5.jpg', '购买最高得4积分');
INSERT INTO `pro` VALUES ('9', '浓缩即食燕窝 70克*3瓶 99%', '浓缩精炖，进口燕条', null, '328', 'img/index/b532f2f441572242333f6c5b92fc9f10.png', null, '0', null, '44', null, 'bjtj', '/img/index/qq1.jpg,/img/index/qq2.jpg,/img/index/qq3.jpg,/img/index/qq4.jpg,/img/index/qq5.jpg', '/img/index/q1.jpg,/img/index/q2.jpg,/img/index/q3.jpg,/img/index/q4.jpg,/img/index/q5.jpg', '购买最高得32积分');
INSERT INTO `pro` VALUES ('10', '每日坚果', '营养配比，乐享生活', '299', '35.8', '/img/index/jg.png', null, '0', null, '40', null, 'bjtj', '/img/detail/ll1.jpg,/img/detail/ll2.jpg,/img/detail/ll3.jpg,/img/detail/ll4.jpg,/img/detail/ll5.jpg', 'img/detail/l1.jpg,/img/detail/l2.jpg,/img/detail/l3.jpg,/img/detail/l4.jpg,/img/detail/l5.jpg', '购买最高得1积分');
INSERT INTO `pro` VALUES ('11', '日式和风声波式电动牙刷', '累计销量百万，洁齿必备基础款', null, '123', '/img/index/e5474a8f4fd5748079e2ba2ead806b51.png', null, '0', null, '34', null, 'bjtj', '/img/detail/rr1.jpg,/img/detail/rr2.jpg,/img/detail/rr3.jpg,/img/detail/rr4.jpg,/img/detail/rr5.jpg', '/img/detail/r1.jpg,/img/detail/r2.jpg,/img/detail/r3.jpg,/img/detail/r4.jpg,/img/detail/r5.jpg', '购买最高得12积分');
INSERT INTO `pro` VALUES ('12', '多功能电锅', '大容量，大火力，一锅多用', '239', '191.3', '/img/index/time1.png', null, '300', '500', '42', null, 'xs', '/img/index/aaa1.jpg,/img/index/aaa2.jpg,/img/index/aaa3.jpg,/img/index/aaa4.jpg,/img/index/aaa5.jpg', '/img/index/aa1.jpg,/img/index/aa2.jpg,/img/index/aa3.jpg,/img/index/aa4.jpg,/img/index/aa5.jpg', '购买最高得19积分');
INSERT INTO `pro` VALUES ('13', '日式和风立式加温器', '一物多置，无声出雾不湿地板', '239', '215.1', '/img/index/time2.png', null, '326', '400', '34', null, 'xs', '/img/detail/tt1.jpg,/img/detail/tt2.jpg,/img/detail/tt3.jpg,/img/detail/tt4.jpg,/img/detail/tt5.jpg', '/img/detail/t1.jpg,/img/detail/t2.jpg,/img/detail/t3.jpg,/img/detail/t4.jpg,/img/detail/t5.jpg', '购买最高得23积分');
INSERT INTO `pro` VALUES ('14', '网易智能感体按摩椅', '由头到脚享受360度舒适体验', '8999', '7299', '/img/index/time3.png', null, '35', '200', '9', null, 'xs', '/img/detail/ww1.jpg,/img/detail/ww2.jpg,/img/detail/ww3.jpg,/img/detail/ww4.jpg,/img/detail/ww5.jpg', '/img/detail/w1.jpg,/img/detail/w2.jpg,/img/detail/w3.jpg,/img/detail/w4.jpg,/img/detail/w5.jpg', '购买最高得4积分');
INSERT INTO `pro` VALUES ('15', '韩国制造 花洒替换滤芯 两只装', '除氧净水，去尘除杂', '49', '32.9', '/img/index/time4.png', null, '0', '500', '12', null, 'xs', '/img/detail/vv1.jpg,/img/detail/vv2.jpg,/img/detail/vv3.jpg,/img/detail/vv4.jpg,/img/detail/vv5.jpg', '/img/detail/v1.jpg,/img/detail/v2.jpg,/img/detail/v3.jpg,/img/detail/v4.jpg,/img/detail/v5.jpg', '购买最高得4积分');
INSERT INTO `pro` VALUES ('16', '哞菇钢笔套装 我的世界', '书写无积墨，操作流畅', null, '69', '/img/index/rq4.png', null, '0', null, '41', null, 'rqtj', '/img/detail/xx1.jpg,/img/detail/xx2.jpg,/img/detail/xx3.jpg,/img/detail/xx4.jpg,/img/detail/xx5.jpg', '/img/detail/x1.jpg,/img/detail/x2.jpg,/img/detail/x3.jpg,/img/detail/x4.jpg,/img/detail/x5.jpg', '购买最高得6积分');
INSERT INTO `pro` VALUES ('17', '6包/提 谷风一木 软抽面巾纸', '网易员工人手一盒，销量稳居前三', null, '16.9', '/img/index/rqzb.png', null, '0', null, '2', null, 'rqz', '/img/detail/gg1.jpg,/img/detail/gg2.jpg,/img/detail/g3.jpg,/img/detail/gg4.jpg,/img/detail/gg5.jpg', '/img/detail/g1.jpg,/img/detail/g2.jpg,/img/detail/g3.jpg,/img/detail/g4.jpg,/img/detail/g5.jpg', '购买最高得2积分');
INSERT INTO `pro` VALUES ('18', '阿瓦提长绒棉超柔毛巾', '瞬间吸水，亲肤近0掉毛率。', null, '2', '/img/index/rq3.png', null, '0', null, '27', null, 'rqtj', '/img/detail/aa1.jpg,/img/detail/aa2.jpg,/img/detail/aa3.jpg,/img/detail/aa4.jpg,/img/detail/aa5.jpg', '/img/detail/a1.jpg,/img/detail/a2.jpg,/img/detail/a3.jpg,/img/detail/a4.jpg,/img/detail/a5.jpg', '购买最高得2积分');
INSERT INTO `pro` VALUES ('19', '鲜果冻 30克 *6颗', '果冻里面有真果粒', '14', '11', '/img/index/re3.png', null, '0', null, '37', null, 'rqtj', '/img/detail/oo1.jpg,/img/detail/oo2.jpg,/img/detail/oo3.jpg,/img/detail/oo4.jpg,/img/detail/oo5.jpg', '/img/detail/o1.jpg,/img/detail/o2.jpg,/img/detail/o3.jpg,/img/detail/o4.jpg,/img/detail/o5.jpg', '购买最高得26积分');
INSERT INTO `pro` VALUES ('20', '软弹速干男/女沐浴拖鞋', '沐浴不积水，Q弹速干', null, '24.9', '/img/index/rq1.png', null, '0', null, '36', null, 'rqtj', '/img/detail/jj1.jpg,/img/detail/jj2.jpg,/img/detail/jj3.jpg,/img/detail/jj4.jpg,/img/detail/jj5.jpg', '/img/detail/j1.jpg,/img/detail/j2.jpg,/img/detail/j3.jpg,/img/detail/j4.jpg,/img/detail/j5.jpg', '购买最高得2积分');
INSERT INTO `pro` VALUES ('21', '懒人抹布', '吸水吸油，热销200万卷', null, '13.99', '/img/index/r4.png', null, '0', null, '27', null, 'rqtj', '/img/detail/kk1.jpg,/img/detail/kk2.jpg,/img/detail/kk3.jpg,/img/detail/kk4.jpg,/img/detail/kk5.jpg', '/img/detail/k1.jpg,/img/detail/k2.jpg,/img/detail/k3.jpg,/img/detail/k4.jpg,/img/detail/k5.jpg', '购买最高得26积分');
INSERT INTO `pro` VALUES ('22', '12包/条 谷风一木 手帕纸', '小巧便携，一纸四层厚实耐用', null, '5.9', '/img/index/rq2.png', null, '0', null, '2', null, 'rqtj', '/img/detail/dd1.jpg,/img/detail/dd2.jpg,/img/detail/dd3.jpg,/img/detail/dd4.jpg,/img/detail/dd5.jpg', '/img/detail/d1.jpg,/img/detail/d2.jpg,/img/detail/d3.jpg,/img/detail/d4.jpg,/img/detail/d5.jpg', '购买最高得26积分');
INSERT INTO `pro` VALUES ('23', '韩国制造 超声波去角质离子导入美容仪', '超声波去角质 感受细滑美肌', null, '269', '/img/index/p3.png,/img/index/p2.jpg', '海外制造商', '0', null, '31', null, 'xp', '/img/detail/bb1.jpg,/img/detail/bb2.jpg,/img/detail/bb3.jpg,/img/detail/bb4.jpg,/img/detail/bb5.jpg', '/img/detail/b1.jpg,/img/detail/b2.jpg,/img/detail/b3.jpg,/img/detail/b4.jpg,/img/detail/b5.jpg', '购买最高得26积分');
INSERT INTO `pro` VALUES ('24', '日本除菌除氧净水龙头', '99.99%除菌滤芯，安心直饮', null, '295', '/img/index/p1.png,/img/index/p4.jpg', '海外制造商', '0', null, '33', null, 'xp', '/img/detail/zz1.jpg,/img/detail/zz2.jpg,/img/detail/zz3.jpg,/img/detail/zz4.jpg,/img/detail/zz5.jpg', '/img/detail/z1.jpg,/img/detail/z2.jpg,/img/detail/z3.jpg,/img/detail/z4.jpg,/img/detail/z5.jpg', '购买最高得25积分');
INSERT INTO `pro` VALUES ('25', '开学季床品礼包', '独家花漾设计，纯棉透气亲肤', '419', '299', '/img/index/p5.png,/img/index/p6.jpg', '海外制造商', '0', null, '7', null, 'xp', '/img/detail/nn1.jpg,/img/detail/nn2.jpg,/img/detail/nn3.jpg,/img/detail/nn4.jpg,/img/detail/nn5.jpg', '/img/detail/n1.jpg,/img/detail/n2.jpg,/img/detail/n3.jpg,/img/detail/n4.jpg,/img/detail/n5.jpg', '购买最高得41积分');
INSERT INTO `pro` VALUES ('26', '假日物语阳台折叠挂桌', '阳台神器 小户型必备', null, '139', '/img/index/p7.png,/img/index/p8.png', null, '0', null, '9', null, 'xp', '/img/detail/ff1.jpg,/img/detail/ff2.jpg,/img/detail/ff3.jpg,/img/detail/ff4.jpg,/img/detail/ff5.jpg', '/img/detail/f1.jpg,/img/detail/f2.jpg,/img/detail/f3.jpg,/img/detail/f4.jpg,/img/detail/f5.jpg', '购买最高得13积分');
INSERT INTO `pro` VALUES ('27', '2色可选 日本制造 宽幅软毛成人牙刷', '累计销量百万，洁齿必备基础款', null, '19', '/img/index/pp1.png,/img/index/pp2.jpg', '海外制造商', '0', null, '41', null, 'xp', '/img/index/66.jpg,/img/index/77.jpg,/img/index/88.jpg,/img/index/99.jpg,/img/index/00.jpg\r\n/img/index/66.jpg,/img/index/77.jpg,/img/index/88.jpg,/img/index/99.jpg,/img/index/00.jpg\r\n/img/index/66.jpg,/img/index/77.jpg,/img/index/88.jpg,/img/index/99.jpg,/', '/img/index/6.jpg,/img/index/7.jpg,/img/index/8.jpg,/img/index/9.jpg,/img/index/0.jpg', '购买最高得1积分');
INSERT INTO `pro` VALUES ('28', '金属横杆装饰手提斜挎包', '金属横杆设计，职场女性首选', null, '469', '/img/index/pp3.png,/img/index/pp4.jpg', null, '0', null, '30', null, 'xp', '/img/detail/ii1.jpg,/img/detail/ii2.jpg,/img/detail/ii3.jpg,/img/detail/ii4.jpg,/img/detail/ii5.jpg', '/img/detail/i1.jpg,/img/detail/i2.jpg,/img/detail/i3.jpg,/img/detail/i4.jpg,/img/detail/i5.jpg', '购买最高得46积分');
INSERT INTO `pro` VALUES ('29', '韩国制造 维他命净水滤芯 松木', '维C净水，香氛沐浴新体验', null, '79', '/img/index/pp5.png,/img/index/pp6.jpg', null, '0', null, '31', null, 'xp', '/img/detail/cc1.jpg,/img/detail/cc2.jpg,/img/detail/cc3.jpg,/img/detail/cc4.jpg,/img/detail/cc5.jpg', '/img/detail/c1.jpg,/img/detail/c2.jpg,/img/detail/c3.jpg,/img/detail/c4.jpg,/img/detail/c5.jpg', '购买最高得46积分');
INSERT INTO `pro` VALUES ('30', '男式都市运动长裤', '低调实用都市穿梭', null, '229', '/img/index/pp7.png,/img/index/pp8.jpg', null, '0', null, '39', '0', 'xp', '/img/detail/hh1.jpg,/img/detail/hh2.jpg,/img/detail/hh3.jpg,/img/detail/hh4.jpg,/img/detail/hh5.jpg', '/img/detail/h1.jpg,/img/detail/h2.jpg,/img/detail/h3.jpg,/img/detail/h4.jpg,/img/detail/h5.jpg', '购买最高得22积分');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) unsigned NOT NULL auto_increment,
  `userTell` varchar(255) default NULL,
  `userPwd` varchar(255) default NULL,
  `userEmail` varchar(255) default NULL,
  PRIMARY KEY  (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('9', '13541025648', '200820e3227815ed1756a6b531e7e0d2', '1902217131@qq.com');
INSERT INTO `user` VALUES ('10', '13515236598', '200820e3227815ed1756a6b531e7e0d2', '1902211@qq.com');
