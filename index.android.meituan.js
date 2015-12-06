'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} = React;

var Item = React.createClass({
  render: function(){
    return (
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={[styles.green, {alignSelf:'center', marginBottom: 10}]}>我们约吧</Text>
          <Text style={[styles.black, {alignSelf:'center', marginBottom: 10}]}>恋人家人好朋友</Text>
        </View>
        <View>
          <Image style={styles.pic} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
        </View>
      </View>
      );
  }
});

var AwesomeProject = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[{height:160}, styles.row,]}>
              <View style={[styles.flex1, {justifyContent:'center'}]}>
                <Text style={[styles.green, {alignSelf:'center', marginBottom: 10}]}>我们约吧</Text>
                <Text style={[styles.black, {alignSelf:'center', marginBottom: 10}]}>恋人家人好朋友</Text>
                <Image style={styles.pic} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
              </View>
              <View style={[{borderLeftWidth:1, borderColor: '#DCD7CD',margin:10}, styles.flex2, styles.column]}>
                <View style={[{borderBottomWidth:1, borderColor: '#DCD7CD'}, styles.flex1, styles.row]}>
                  <View style={[styles.flex1, {justifyContent:'center'}]}>
                    <Text style={[styles.red, {alignSelf:'center', marginBottom: 10}]}>超低价值</Text>
                    <Text style={[styles.black, {alignSelf:'center', marginBottom: 10}]}>十元惠生活</Text>
                  </View>
                  <View style={[styles.flex1]}>
                    <Image style={[styles.logo,{alignSelf:'flex-end'}]} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
                  </View>
                </View>
                <View style={[styles.flex1, styles.row]}>
                  <View style={[{borderRightWidth:1, borderColor: '#DCD7CD'}, styles.flex1,]}>
                    <Text style={[styles.purple,{alignSelf:'center',}]}>聚餐宴请</Text>
                    <Text style={[styles.black,{alignSelf:'center',}]}>朋友家人常聚聚</Text>
                    <Image style={[styles.icon,{alignSelf:'center',}]} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
                  </View>
                  <View style={[styles.flex1,]}>
                    <Text style={[styles.yellow, {alignSelf:'center', marginBottom:5 }]}>名店抢购</Text>
                    <Text style={[styles.black, {alignSelf:'center', marginBottom:5 }]}>还有</Text>
                    <Text style={[styles.black, {alignSelf:'center', }]}>12:06:12</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.divider, styles.row]}></View>
            <View style={[{height:240}, , styles.column,]}>
              <View style={[{borderBottomWidth:1, borderColor: '#DCD7CD'}, styles.flex1]}>
                <View style={[styles.flex1, styles.row]}>
                  <View style={styles.layout2}>
                    <Text style={styles.red}>1元吃喝玩乐</Text>
                    <Text style={styles.black}>新用户专享</Text>
                  </View>
                  <View style={[styles.flex1,{justifyContent:'center'}]}>
                    <Image style={[{width:177, height:60, alignSelf:'flex-end',}]} source={{uri: 'http://p1.meituan.net/280.0/groupop/b49185c18b5ddfb32a5c1e78dd4f18c254968.jpg'}}></Image>
                  </View>
                </View>
              </View>
              <View style={[styles.flex2, styles.column]}>
                <View style={[{borderBottomWidth:1, borderColor: '#DCD7CD'},, styles.flex1, styles.row]}>
                  <View style={[styles.flex1]}>
                    <View style={[{borderRightWidth:1, borderColor: '#DCD7CD'},styles.flex1, styles.row,]}>
                      <View style={styles.layout2}>
                        <Text style={styles.purple}>1元肯德基</Text>
                        <Text style={styles.black}>新用户专享</Text>
                      </View>
                      <View style={[styles.flex1,{justifyContent:'center'}]}>
                        <Image style={[styles.logo,{alignSelf:'flex-end',}]} source={{uri: 'http://p0.meituan.net/280.0/groupop/9aa35eed64db45aa33f9e74726c59d938450.png'}}></Image>
                      </View>
                    </View>                    
                  </View>
                  <View style={[styles.flex1]}>
                    <View style={[styles.flex1, styles.row]}>
                      <View style={styles.layout2}>
                        <Text style={styles.yellow}>酒店特惠房</Text>
                        <Text style={styles.black}>劲爆低至2折</Text>
                      </View>
                      <View style={[styles.flex1,{justifyContent:'center'}]}>
                        <Image style={[styles.logo,{alignSelf:'flex-end',}]} source={{uri: 'http://p1.meituan.net/280.0/groupop/58d8b89afd0840a612c1b932907652dc7499.jpg'}}></Image>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.flex1, styles.row]}>
                  <View style={[styles.flex1]}>
                    <View style={[{borderRightWidth:1, borderColor: '#DCD7CD'},styles.flex1, styles.row]}>
                      <View style={styles.layout2}>
                        <Text style={styles.green}>从天儿降</Text>
                        <Text style={styles.black}>9.9起在线选座</Text>
                      </View>
                      <View style={[styles.flex1,{justifyContent:'center'}]}>
                        <Image style={[styles.logo,{alignSelf:'flex-end',marginBottom: 5}]} source={{uri: 'http://p0.meituan.net/280.0/groupop/532b8be3e5b1ecc7c79e487654a47f7719941.png'}}></Image>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.flex1]}>
                    <View style={[styles.flex1, styles.row]}>
                      <View style={styles.layout2}>
                        <Text style={styles.blue}>天天特价</Text>
                        <Text style={styles.black}>特惠不打烊</Text>
                      </View>
                      <View style={[styles.flex1,{justifyContent:'center'}]}>
                        <Image style={[styles.logo,{alignSelf:'flex-end',}]} source={{uri: 'http://p1.meituan.net/280.0/groupop/55668b743d7a47d6e7b2ddaf046d301f22938.png'}}></Image>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.divider, styles.row]}></View>
          </View>
        );
    }
});

var styles = StyleSheet.create({
  border1:{
    borderWidth: 1,
    borderColor: 'red',
    height:160, 
  },
  border:{
    borderWidth: 1,
    borderColor: '#DCD7CD',
    borderRightWidth: 0.5,
    height:160, 
  },
  divider:{
    height: 10,
    backgroundColor: '#DCD7CD'
  },
  row:{
    flexDirection: 'row',
  },
  column:{
    flexDirection: 'column',
  },
  flex1:{
      flex:1,
  },
  flex2:{
      flex:2,
  },
  red:{
    color: 'red',
  },
  green:{
    color: 'green',
  },
  purple:{
    color: 'purple',
  },
  black:{
    color: 'black',
  },
  yellow:{
    color: '#ff8601',
  },
  blue:{
    color: 'blue',
  },
  pic:{
    height:80,
  },
  logo:{
    width:60,
    height:60,
  },
  icon:{
    width:36,
    height:36,
  },
  time:{
    width: 12,
    height: 12,
    backgroundColor: '#4C4C4C',
  },
  layout2:{
    flex: 1,
    justifyContent:'center',
    margin: 5,
  },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);