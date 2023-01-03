axios.post(
    'http://rallycoding.herokuapp.com/api/music_albums', 
    {
       'param1': 'value1',
       'param2': 'value2',
       //other data key value pairs
    },
    {
       headers: {
           'api-token': 'xyz',
            //other header fields
       }
    }
);
