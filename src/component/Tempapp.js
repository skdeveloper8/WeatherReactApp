import React, { useEffect, useState } from 'react'

function Tempapp() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Mumbai');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a099c67d97a50575ce5eccca267522e5`
            const response = await fetch(url);
            const resJson = await response.json();
            //      console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <div className='card'>
            <div>
                <input type="text" className='inputField' value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            {!city ? (
                <p>No data found</p>
            ) :
                (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className='fas fa-street-view'></i>{search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp} Cel
                            </h1>
                            <h3 className='tempmin_max'>Min:{city.temp_min} Cel | Max:{city.temp_max} Cel</h3>

                        </div>
                      
                    </div>
                )}

        </div>
    )
}

export default Tempapp