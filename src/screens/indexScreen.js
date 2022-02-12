import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList ,Button, TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'


const IndexScreen = ({navigation}) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>(
            <TouchableOpacity >
                <Feather name='plus' size={30} style={{paddingHorizontal:20}} />
            </TouchableOpacity>
            )
        });
      }, [navigation ]);

    return(
        <View>

            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList 
            data={state}
            keyExtractor={blogPost => blogPost.id }
            renderItem={({item}) => {
                return(
                <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', {id: item.id})}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash" style={styles.icon}/>
                            </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                ) 
            }}
            
            />
        </View>
    )
}



const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 15,
        paddingHorizontal:10,
        borderTopWidth:1,

        borderColor: 'gray'
    },

    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },

    icon:{
        fontSize:24,
    },  

})

export default IndexScreen;