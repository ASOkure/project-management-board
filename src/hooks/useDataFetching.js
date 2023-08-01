import { useState, useEffect } from 'react';
function useDataFetching(dataSource) {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');


    useEffect(()=> {

      function async fetchData(dataSource) =>  {

        try {

            const data =  await fetch ( dataSource) ;
            
             const result   = await data.json()
        }


        }
    })

  return [];
}
export default useDataFetching;