/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent }from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends PureComponent  
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      data:[],
      isPhoto: false
    }
  }
  render() {
    return(
      <View>
        <View>
          <Button onPress={this.getImage.bind(this)}
           title="Get Image" />
        </View>
        {
          this.state.isPhoto ?
          <View>
            <Image source={{ uri: this.state.data[0].urls.raw }}
                    style={{ width: 200, height: 200 }}/>
          </View>
          : <View>
            <Text> No Image !</Text>
            </View>
        }
      </View>
    );
  }


  getImage()
  {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.unsplash.com/photos/random?count=1&client_id=QXRMGvEiOmOOdS-WlgIWJsb3O8DzoivojhfKsYlb_r8", requestOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data:json,
          isPhoto: true
        });
      })
  }

}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
