import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View,Linking } from 'react-native';

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=India')
      .then(resp => resp.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          // keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={{flex: 1,alignItems:'center'}}>
              <View style={{ elevation: 5,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4, 
    backgroundColor:'#fff',
    borderRadius:10,
    paddingVertical: 10,
    width :'96%',
    marginVertical: '2%',}}>
                <View style={{alignItems:'flex-start',justifyContent:'flex-end',marginHorizontal:5,marginVertical:10}}>
                  <Text style={{fontSize:20,marginBottom:2}}>{item.name}</Text>
                  {/* <Text style={{fontSize:15}}>{item.state-province}</Text> */}
                  <Text style={{fontSize:15,marginBottom:2}}>{item.country}</Text>
                  <Text style={{fontSize:15,color:'blue'}} 
                  onPress={ ()=> Linking.openURL(`${item.web_pages}`)}>{item.web_pages}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
