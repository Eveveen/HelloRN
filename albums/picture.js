import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, View, Button, CameraRoll } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    state = {
        photos: []
    }
    render() {
        return (
            <View>
                <Button title="Load Images" onPress={this._handleButtonPress} />
                <ScrollView>
                    {this.state.photos.map((p, i) => {
                        return (
                            <View>
                                <Image
                                    key={i}
                                    style={{
                                        width: 300, height: 400,
                                    }}
                                    source={{ uri: p.node.image.uri }}
                                />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }

    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 10,
            assetType: 'Photos',
        })
            .then(r => {
                console.log("phoe,", r.edges)
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                console.log("err0=", err)
                //Error Loading Images
            });
    };
}