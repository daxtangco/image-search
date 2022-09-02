import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID LPUqrXE3sdblb4tm3VCGMnJWNZDMG6OMoh-lGqPePqg'
                },
                params: {
                    query: term
                }
            }
        );
        this.setState({ images: response.data.results });

        // console.log(response.data.results);

        // Promise Syntax
        // axios.get(
        //     'https://api.unsplash.com/search/photos',
        //     {
        //         headers: {
        //             Authorization: 'Client-ID LPUqrXE3sdblb4tm3VCGMnJWNZDMG6OMoh-lGqPePqg'
        //         },
        //         params: {
        //             query: term
        //         }
        //     }
        // ).then(
        //     (response) => {
        //         console.log(response.data.results);

        //     }
        // );

    }

    // Access Key Unsplash
    // Authorization: Client-ID YLPUqrXE3sdblb4tm3VCGMnJWNZDMG6OMoh-lGqPePqg

    // API Link
    // https://api.unsplash.com/

    render() {
        return (
            <div>
                <Navbar />
                <SearchBar onSubmit={this.onSearchSubmit} label="Picture Search" />
                <ImageList images={this.state.images} />
            </div>
        );
    }

}

export default App;
