import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

var MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: { thumbnail: "http://i.imgur.com/UePbdph.jpg" }
    }
];

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class MovieList extends Component {
    constructor(props) {
        super(props);   //这一句不能省略，照抄即可
        this.state = {
            movies: null,  //这里放你自己定义的state变量及初始值
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }

        var movie = this.state.movies[0];
        return this.renderMovie(movie);
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据……
            </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: movie.posters.thumbnail }}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    movies: responseData.movies,
                });
            });
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
});