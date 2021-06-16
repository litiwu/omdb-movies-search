import React, {useState} from 'react'


export default function InnerPage() {
    const [movieDetail, setMovieDetail] = useState([]);
    const [showMovieDetail, setShowMovieDetail] = useState(false);

    // for modal 
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)

    }



    function getMovieDetails(id)

        let response;
        async function fetchMyAPI(id) {
          searchParam = props.location.state.query;
          const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&i=${id}&r=json`;
          console.log(apiUrl);
          response = await fetch(apiUrl);
          response = await response.json();
          console.log(response.Search);
          if (response.Response == "False") setShowMovies(false);
          else {
            setMovies(response.Search);
        
            setShowMovies(true);
          }
          setQuery("");
        }
    
        fetchMyAPI(page);
      }

    return (
        <div>
            <Modal>

            </Modal>
            
        </div>
    )
}
