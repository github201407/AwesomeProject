/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  DrawerLayoutAndroid, 
  TouchableHighlight,
  ProgressBarAndroid,
  ToolbarAndroid,
  ToastAndroid,
} = React;

var AwesomeProject = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6']),
      };
    },

  render: function() {
    var navigationView = (
      <View style={styles.drawer}>
        <Text style={styles.draweritem}> 实时信息 </Text>
        <Text style={styles.draweritem}> 提醒通知 </Text>
        <Text style={styles.draweritem}> 活动路线 </Text>
        <Text style={styles.draweritem}> 相关设置 </Text>
      </View>
    );

    var title = '泗泾城市e管家';
    return (      
      <DrawerLayoutAndroid
      drawerWidth={200}
      drawerPosition={DrawerLayoutAndroid.positions.Right}
        renderNavigationView={() => navigationView}>
        <View style={styles.drawer}>
         <ToolbarAndroid
            title={title}
            titleColor="white"
            style={styles.toolbar} />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
          <View style={styles.tabrow}><Cell>首页</Cell><Cell/><Cell/><Cell/><Cell/></View>
        </View>
      </DrawerLayoutAndroid>
    );
  },
  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight onPress={() =>
              ToastAndroid.show('' + rowData, ToastAndroid.SHORT)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.listitem}>
              {rowData}
            </Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },
});
class Cell extends React.Component {
  render() {
    return <Text style={styles.cell} />;
  }
}
var CELL_SIZE = 60;
var CELL_MARGIN = 4;
var styles = StyleSheet.create({
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: 5,
    backgroundColor: '#00a2ed',
    margin: CELL_MARGIN,
    color: 'white'
  },
  tabrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#00a2ed'
  },
  drawer:{
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#F6F6F6',
  },
  draweritem:{
    margin: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  listitem:{
    margin: 10,
    fontSize: 20,
    textAlign: 'left'
  },
  drawerTitle:{
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    backgroundColor: '#00a2ed',
    height: 56,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
